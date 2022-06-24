const Globals = require("../../Globals");

const id = Globals.chevalier.id;
const logo = Globals.chevalier.logo;
const typeratio = Globals.typeratio;

module.exports = [
    {
        "name": "Non mais là ! Pourtant vous allez pas dire que j'suis à cheval sur les principes ! Mais question chasteté on a quand même un chevalier sur huit qui est cul nu !",
        "logo": logo,
        "seuil": 25e6,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    }
]