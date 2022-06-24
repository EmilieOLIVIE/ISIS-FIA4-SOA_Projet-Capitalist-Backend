const Globals = require("../../Globals");

const id = Globals.chevalier.id;
const logo = Globals.chevalier.logo;
const typeratio = Globals.typeratio;

module.exports = [
    {
        "name": "MÉÉCRÉÉAAAAAAAAANTS !",
        "logo": logo,
        "seuil": 25e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },    
    {
        "name": "Bohort, je vous donne l'ordre de vous rendre immédiatement en Andalousie pour y rencontrer le chef wisigoth et lui transmettre le message de paix suivant :... « Coucou »...",
        "logo": logo,
        "seuil": 60e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },   
    {
        "name": "NOUS ALLONS TOUS MOURIR !",
        "logo": logo,
        "seuil": 100e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.vitesse,
        "unlocked": false
    },   
]