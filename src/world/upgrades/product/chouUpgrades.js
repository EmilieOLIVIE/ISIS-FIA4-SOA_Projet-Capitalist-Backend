const Globals = require("../../Globals");

const id = Globals.chou.id;
const logo = Globals.chou.logo;
const typeratio = Globals.typeratio;

module.exports = [
        {
            "name": "On va essayer bon, avant avant avant d'aller gueuler, hein, de bien définir POURQUOI, hein, qu'on gueule.",
            "logo": logo,
            "seuil": 1e3,
            "idcible": id,
            "ratio": 2,
            "typeratio": Globals.typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Qu'est-ce que c'est comme femme, une chèvre ?",
            "logo": logo,
            "seuil": 2e3,
            "idcible": id,
            "ratio": 2,
            "typeratio": Globals.typeratio.gain,
            "unlocked": false
        },
        {
            "name": "J'vais l'tuer, Sire ! Je vais tellement si tant y taper sa gueule qu'il va décéder !",
            "logo": logo,
            "seuil": 3e3,
            "idcible": id,
            "ratio": 2,
            "typeratio": Globals.typeratio.gain,
            "unlocked": false
        },
]