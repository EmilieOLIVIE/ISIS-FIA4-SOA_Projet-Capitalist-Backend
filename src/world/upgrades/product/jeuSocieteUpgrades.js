const Globals = require("../../Globals");

const id = Globals.jeuSociete.id;
const logo = Globals.jeuSociete.logo;
const typeratio = Globals.typeratio;

module.exports = [
    {
        "name": "Si la mémoire est à la tête ce que le passé, peut-on y accéder à six ?",
        "logo": logo,
        "seuil": 5e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "13, 14, 15... Enfin tous les chiffres impairs jusqu'à 22.",
        "logo": logo,
        "seuil": 10e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.vitesse,
        "unlocked": false
    },
    {
        "name": "Celui avec les jolis yeux bleus, là ? Très gros potentiel.",
        "logo": logo,
        "seuil": 15e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Non mais... Que vous soyez débile c'est une chose, mais là y a de la mauvaise volonté quand même !",
        "logo": logo,
        "seuil": 20e3,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
]