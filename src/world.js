const angelupgrades = require("./world/angelupgrades/angelupgrades");
const managers = require("./world/managers/managers");
const products = require("./world/products/products");
const allunlocks = require("./world/unlocks/allunlocks");
const upgrades = require("./world/upgrades/upgrades");

module.exports = {
    "name": "Kaamelott",
    "logo": "icones/logoKaamelott.png",
    "money": 10000,
    "score": 0,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": 0,
    "products": products,
    "allunlocks": allunlocks,
    "upgrades": upgrades,
    "angelupgrades": angelupgrades,
    "managers": managers
};