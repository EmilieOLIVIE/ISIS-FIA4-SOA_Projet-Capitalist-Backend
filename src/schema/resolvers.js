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
            if (context.world.money < product.cout) throw new Error(ERRORS.INSUFFICIENT_MONEY)

            //Update product quantity & cost
            product.quantite += args.quantite
            product.cout = calculateGeometricSequence(product.cout, product.croissance, args.quantite)

            //If product reached a new level, update product revenue or speed
            let newLevel = product.paliers.find(palier => !palier.unlocked)
            if (product.quantite === newLevel.seuil) {
                //Unlock new level
                newLevel.unlocked = true
                context = updateProduct(context, newLevel)
            }

            //Update world's money
            context.world.money = context.world.money - calculateGeometricSequence(product.cout, product.croissance, args.quantite)

            //Save changes
            saveWorld(context)

            return product
        },
        lancerProductionProduit(parent, args, context) {
            context = calcScore(context)

            let product = context.world.products.find(element => element.id === args.id)
            product.timeleft = product.vitesse

            //Save world
            saveWorld(context)

            return product
        },
        engagerManager(parent, args, context) {
            context = calcScore(context)

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

            let cashUpgrade = context.world.upgrades.find(upgrade => upgrade.name === args.name)

            if (world.money < cashUpgrade.seuil) throw new Error(ERRORS.INSUFFICIENT_MONEY)
            if (world.money < cashUpgrade.unlocked) throw new Error(ERRORS.INSUFFICIENT_MONEY)

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

            let angelUpgrade = context.world.angelupgrades.find(upgrade => upgrade.name === args.name)

            if (world.money < angelUpgrade.seuil) throw new Error(ERRORS.INSUFFICIENT_MONEY)
            if (world.money < angelUpgrade.unlocked) throw new Error(ERRORS.INSUFFICIENT_MONEY)

            //Unlock upgrade
            angelUpgrade.unlocked = true

            //Update target characteristics
            if (angelUpgrade.idcible === Globals.all.id) {
                for (product of context.world.products) {
                    context = updateProduct(context, angelUpgrade)
                }
            } else {
                context = updateProduct(context, angelUpgrade)
            }

            context.world.money = context.world.money - angelUpgrade.seuil

            //Save world
            saveWorld(context)

        },
        resetWorld(parent, args, context) {
            context = calcScore(context)

            //EO a finir

            //Create new world from template
            context.world = world
            //Save changes
            saveWorld(context)

            return context.world
        }

    }
}

function calculateGeometricSequence(startValue, ratio, n) {
    return startValue * (ratio^n - 1) / (ratio - 1)
    for (let i = 1; i < n; i++) {
        startValue = startValue * ratio
    }
    return startValue
}

function calcScore(context) {
    let world = context.world
    let products = context.world.products
    let money = 0
    let elapsedTime = Date.now() - parseInt(context.world.lastupdate) //Calculate elapsed time since last update

    products.forEach(product => {
        //If manager is unlocked
        if (product.managerUnlocked) {
            //Calculate number of products produced
            let nbOfProducts = Math.trunc(elapsedTime / product.vitesse)
            //Update product production time according to elapsed time
            product.timeleft = product.vitesse - (elapsedTime % product.vitesse)
            //Elapsed time / speed products have been created
            money = nbOfProducts * product.quantite * product.revenu * (1 + world.angelbonus * world.activeangels / 100)
        }
        //If production time is not null, product is being produced
        else if (product.timeleft !== 0) {
            //If manager is not yet unlocked, only 1 product has been created
            if (product.timeleft < 0) {
                product.timeleft = 0
                money = product.revenu * product.quantite * (1 + world.angelbonus * world.activeangels / 100)
            } else {
                product.timeleft -= elapsedTime
            }
        }
    })

    //Update world's money, score & lastupdate
    world.money += money
    world.score += money
    world.lastupdate = parseInt(Date.now())

    return context
}

function updateProduct(context, upgrade) {
    let newProduct = context.world.products.find(prod => prod.id === upgrade.idcible)
    if (upgrade.typeratio === Globals.typeratio.gain) newProduct.revenu *= upgrade.ratio
    else if (upgrade.typeratio === Globals.typeratio.vitesse) newProduct.vitesse /= upgrade.ratio
    else if (upgrade.typeratio === Globals.typeratio.angels) null
    return context
}

const ERRORS = {
    INSUFFICIENT_MONEY: "Achat impossible: fonds insuffisants.",
    ALREADY_UNLOCKED: "Element déjà débloqué."
}