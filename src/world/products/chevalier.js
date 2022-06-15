const Globals = require("../Globals");

const id = Globals.chevalier.id;
const logo = Globals.chevalier.logo;
const typeratio = Globals.typeratio;

module.exports = {
    "id": id,
    "name": "Chevalier",
    "logo": logo,
    "cout": 8640,
    "croissance": 1.13,
    "revenu": 4320,
    "vitesse": 12e3,
    "quantite": 0,
    "timeleft": 0,
    "managerUnlocked": false,
    "paliers": [
        {
            "name": "N’ayez crainte, Sire, je protégerai la reine de la férocité des bêtes de la nuit ! \n [Oh... Non, mais, allez boire un coup, je vous assure hein, ça ira mieux !] ",
            "logo": logo,
            "seuil": 20,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Si votre but c’était de séduire les dames fallait faire chevalier, c’est tout !",
            "logo": logo,
            "seuil": 50,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Apollon il va se lever et vous le mettre dans le pif son casque !",
            "logo": logo,
            "seuil": 100,
            "idcible": id,
            "ratio": 5,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Bah ça va, je picole pas souvent !",
            "logo": logo,
            "seuil": 150,
            "idcible": id,
            "ratio": 5,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
    ]
}