const Globals = require("../Globals");

const id = Globals.jambon.id;
const logo = Globals.jambon.logo;
const typeratio = Globals.typeratio;

module.exports = {
    "id": id,
    "name": "Jambon",
    "logo": logo,
    "cout": 60,
    "croissance": 1.15,
    "revenu": 60,
    "vitesse": 3000,
    "quantite": 0,
    "timeleft": 0,
    "managerUnlocked": false,
    "paliers": [
        {
            "name": "Le gras, c'est la vie",
            "logo": logo,
            "seuil": 20,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "La joie de vivre et le jambon, y a pas 36 recettes du bonheur",
            "logo": logo,
            "seuil": 75,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "C'est d'la merde",
            "logo": logo,
            "seuil": 150,
            "idcible": id,
            "ratio": 5,
            "typeratio": typeratio.gain,
            "unlocked": false
        }
    ]
}