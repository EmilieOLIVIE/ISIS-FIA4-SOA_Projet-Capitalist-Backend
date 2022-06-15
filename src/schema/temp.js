

function calcProductSpeed(world, productId) {
    let product = world.products.find(product => product.id === productId)
    let speed = product.vitesse

    //Find unlocked upgrades related to given product
    let speedRelatedUpgrades = [
        ...product.paliers.filter(palier => palier.unlocked && palier.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
        ...world.cashUpgrades.filter(upgrade => ([productId, Globals.all.id].includes(upgrade.idcible)) && upgrade.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
        ...world.allunlocks.filter(unlock => ([productId, Globals.all.id].includes(unlock.idcible)) && unlock.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
        ...world.angelupgrades.filter(upgrade => ([productId, Globals.all.id].includes(upgrade.idcible)) && upgrade.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
    ]

    //Update speed according to given ratios
    speedRelatedUpgrades.forEach((upgrade) => {
        speed /= upgrade.ratio
    })

    return speed
}

function calcProductRevenue(world, productId) {
    let product = world.products.find(product => product.id === productId)
    let gain = product.revenu

    let gain2 = {... product.revenu }
    //Find unlocked upgrades related to given product
    let gainRelatedUpgrades = [
        ...product.paliers.filter(palier => palier.unlocked && palier.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
        ...world.cashUpgrades.filter(upgrade => ([productId, Globals.all.id].includes(upgrade.idcible)) && upgrade.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
        ...world.allunlocks.filter(unlock => ([productId, Globals.all.id].includes(unlock.idcible)) && unlock.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
        ...world.angelupgrades.filter(upgrade => ([productId, Globals.all.id].includes(upgrade.idcible)) && upgrade.typeratio === GLOBALS.TYPE_RATIO.VITESSE),
    ]

    //Update speed according to given ratios
    gainRelatedUpgrades.forEach((upgrade) => {
        gain *= upgrade.ratio
    })

    return gain
}