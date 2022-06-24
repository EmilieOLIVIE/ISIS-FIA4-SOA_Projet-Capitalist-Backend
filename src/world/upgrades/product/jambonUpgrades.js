const Globals = require("../../Globals");

const id = Globals.jambon.id;
const logo = Globals.jambon.logo;
const typeratio = Globals.typeratio;

module.exports = [
    {
        "name": "Le croc, messieurs.",
        "logo": logo,
        "seuil": 5e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
]