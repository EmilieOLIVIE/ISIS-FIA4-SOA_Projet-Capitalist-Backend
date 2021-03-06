const world = require("../world");
const fs = require("fs");
const Globals = require("../world/Globals");

function saveWorld(context) {
    fs.writeFile("src/userworlds/" + context.user + "-world.json", JSON.stringify(context.world),
        err => {
            if (err) {
                console.error(err);
                throw new Error(`Erreur d'écriture du monde coté serveur`)
            }
        }
    )
}

module.exports = {
    Query: {
        getWorld(parent, args, context) {
            //Calculate score
            context = calcScore(context)
            //Save world
            saveWorld(context)

            return context.world
        }
    },
    Mutation: {
        acheterQtProduit(parent, args, context) {
            //Calculate score
            context = calcScore(context)

            //Find product in world
            let product = context.world.products.find(product => product.id === args.id)
            if (!product) throw new Error(`Le produit avec l'id ${args.id} n'existe pas`)
            if (context.world.money < calcGeometricSequenceNSum(product.cout, product.croissance, args.quantite))
                throw new Error(ERRORS.INSUFFICIENT_MONEY)

            //Update world's money
            context.world.money -= calcGeometricSequenceNSum(product.cout, product.croissance, args.quantite)
            //Update product quantity & cost
            product.quantite += args.quantite
            product.cout = getGeometricSequenceNTerm(product.cout, product.croissance, args.quantite + 1)

            //If product reached a new level, update product revenue or speed
            product.paliers.forEach(level => {
                if (!level.unlocked && product.quantite >= level.seuil) {
                    //Unlock new level
                    level.unlocked = true
                    //Then update product
                    context = updateProduct(context, level)
                }
            })

            //Also check allunlocks
            context.world.allunlocks.forEach(level => {
                if (!level.unlocked) {
                    //Check that all products have reached the unlock threshold
                    if (world.products.every(product => product.quantite >= level.seuil)) {
                        //Unlock new level
                        level.unlocked = true
                        //Then update all products
                        context = updateProduct(context, level)
                    }
                }
            })

            //Save changes
            saveWorld(context)

            return product
        },
        lancerProductionProduit(parent, args, context) {
            //Find product in world
            let product = context.world.products.find(element => element.id === args.id)
            if (!product) throw new Error(`Le produit avec l'id ${args.id} n'existe pas`)

            /*** /!\ WARNING ***/
            /* Code below is not secure ; it can be exploited if lancerProductionProduit is called outstide of dedicated Frontend context 
            (which prevents function call if product is not finished being produced). This glitch has been introduced purposedly to
            palliate client-server delay in score calculation when product production is not automated, though it is not a clean solution. */

            //If product timeleft is not null, it has been produced once before and is now finished
            if (product.timeleft !== 0) {
                //Add money gained to world money and score
                let gain = product.quantite * product.revenu * (1 + world.angelbonus * world.activeangels / 100)
                context.world.money += gain
                context.world.score += gain
            }
            /*** WARNING END ***/

            product.timeleft = product.vitesse

            context = calcScore(context)

            //Save world
            saveWorld(context)

            return product
        },
        engagerManager(parent, args, context) {
            context = calcScore(context)

            //Find manager in world
            let newManager = context.world.managers.find(element => element.name === args.name)

            if (context.world.money < newManager.seuil) throw new Error(ERRORS.INSUFFICIENT_MONEY)
            if (newManager.unlocked) throw new Error(ERRORS.ALREADY_UNLOCKED)

            //Unlock manager
            newManager.unlocked = true

            //Update manager unlock on relevant product
            let newProduct = context.world.products.find(element => element.id === newManager.idcible)
            newProduct.managerUnlocked = true

            //Withdraw manager cost from money
            context.world.money = context.world.money - newManager.seuil

            //Save world
            saveWorld(context)
            return context.world.managers.find(manager => manager.name === args.name)
        },
        acheterCashUpgrade(parent, args, context) {
            context = calcScore(context)

            //Find cash upgrade in world
            let cashUpgrade = context.world.upgrades.find(upgrade => upgrade.name === args.name)

            if (context.world.money < cashUpgrade.seuil) throw new Error(ERRORS.INSUFFICIENT_MONEY)
            if (cashUpgrade.unlocked) throw new Error(ERRORS.ALREADY_UNLOCKED)

            //Unlock upgrade
            cashUpgrade.unlocked = true

            //Update target characteristics
            context = updateProduct(context, cashUpgrade)

            context.world.money = context.world.money - cashUpgrade.seuil

            //Save world
            saveWorld(context)
            return cashUpgrade
        },
        acheterAngelUpgrade(parent, args, context) {
            context = calcScore(context)

            //Find angel upgrade in world
            let angelUpgrade = context.world.angelupgrades.find(upgrade => upgrade.name === args.name)

            if (context.world.activeangels < angelUpgrade.seuil) throw new Error(ERRORS.INSUFFICIENT_MONEY)
            if (angelUpgrade.unlocked) throw new Error(ERRORS.ALREADY_UNLOCKED)

            //Unlock upgrade
            angelUpgrade.unlocked = true

            //Update target characteristics
            context = updateProduct(context, angelUpgrade)

            //Update world's active angels
            context.world.activeangels -= angelUpgrade.seuil

            //Save world
            saveWorld(context)
            return angelUpgrade
        },
        resetWorld(parent, args, context) {
            context = calcScore(context)

            //Calculate earned angels according to player's score
            let earnedAngels = Math.trunc(150 * Math.sqrt(context.world.score / Math.pow(10, 15)) - context.world.totalangels)
            let totalangels = context.world.totalangels + earnedAngels
            let score = context.world.score

            //Create new world from template
            context.world = world

            //Update world's total angels & score according to previous game
            context.world.activeangels = earnedAngels
            context.world.totalangels = totalangels
            context.world.score = score

            //Save changes
            saveWorld(context)

            return context.world
        }

    }
}

function getGeometricSequenceNTerm(a0, q, n) {
    return a0 * Math.pow(q, n - 1)
}

function calcGeometricSequenceNSum(a0, q, n) {
    return (a0 - getGeometricSequenceNTerm(a0, q, n) * q) / (1 - q)
}

/**
 * Calculate score according to elapsed time
 */
function calcScore(context) {
    let world = context.world
    let products = context.world.products
    let money = 0
    let elapsedTime = Date.now() - parseInt(context.world.lastupdate) //Calculate elapsed time since last update

    products.forEach(product => {
        //If manager is unlocked or product is in production
        if (product.timeleft !== 0 || product.managerUnlocked) {
            let nbOfProducts = 0
            product.lastupdate = Date.now()
            let time = elapsedTime - product.timeleft
            //If elapsed time is higher than product time left, 
            //at least one product has been produced 
            if (time >= 0) {
                nbOfProducts = 1
                product.timeleft = 0
                //In case manager is unlocked, product may have been produced several times
                if (product.managerUnlocked) {
                    //Calculate how many batches of product have been produced
                    nbOfProducts += Math.trunc(time / product.vitesse)
                    //Calculate remaining time to produce current batch
                    product.timeleft = product.vitesse - (time % product.vitesse)
                }
                //Calculate how much money was earned
                money += nbOfProducts * product.quantite * product.revenu * (1 + world.angelbonus * world.activeangels / 100)
            }
            //Othwerwise, product is still in production, update its time left
            else product.timeleft = -time
        }
    })

    //Update world's money, score & lastupdate
    world.money += money
    world.score += money
    world.lastupdate = parseInt(Date.now())

    return context
}

/**
 * Update product characteristics according to given upgrade
 */
function updateProduct(context, upgrade) {
    //Update product characteristics according to boost characteristics
    function update(newProduct, upgrade) {
        if (upgrade.typeratio === Globals.typeratio.gain) newProduct.revenu *= upgrade.ratio
        else if (upgrade.typeratio === Globals.typeratio.vitesse) newProduct.vitesse = Math.round(newProduct.vitesse / upgrade.ratio)
        else if (upgrade.typeratio === Globals.typeratio.angels) null
        return newProduct
    }

    //If upgrade's target is all, loop through each product and update it
    if (upgrade.idcible === Globals.all.id) {
        context.world.products.forEach(product => {
            product = update(product, upgrade)
        })
    } else {
        //Else, find relevant product and update it
        let newProduct = context.world.products.find(prod => prod.id === upgrade.idcible)
        newProduct = update(newProduct, upgrade)
    }

    return context
}

const ERRORS = {
    INSUFFICIENT_MONEY: "Achat impossible: fonds insuffisants.",
    ALREADY_UNLOCKED: "Element déjà débloqué."
}