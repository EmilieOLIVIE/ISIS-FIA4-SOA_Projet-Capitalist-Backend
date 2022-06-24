const catapulteUpgrades = require("./product/catapulteUpgrades");
const chevalierUpgrades = require("./product/chevalierUpgrades");
const chouUpgrades = require("./product/chouUpgrades");
const jambonUpgrades = require("./product/jambonUpgrades");
const jeuSocieteUpgrades = require("./product/jeuSocieteUpgrades");

module.exports = [
    ...chouUpgrades,
    ...jambonUpgrades,
    ...jeuSocieteUpgrades,
    ...chevalierUpgrades,
    ...catapulteUpgrades,
]