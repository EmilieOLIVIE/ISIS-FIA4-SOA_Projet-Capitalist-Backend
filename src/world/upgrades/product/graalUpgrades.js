const Globals = require("../../Globals");

const id = Globals.graal.id;
const logo = Globals.graal.logo;
const typeratio = Globals.typeratio;

module.exports = [
    {
        "name": "Le Graal, c'est une vraie saloperie, méfiez-vous.",
        "logo": logo,
        "seuil": 100e6,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Si Joseph d'Arimathie a pas été trop con, vous pouvez être sûr que le Graal, c'est un bocal à anchois.",
        "logo": logo,
        "seuil": 200e6,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "D'après mes derniers renseignements, il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe, mais... un récipient.",
        "logo": logo,
        "seuil": 300e6,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Oubliez ce que je viens de dire. Le Graal, c'est d'la merde.",
        "logo": logo,
        "seuil": 400e6,
        "idcible": id,
        "ratio": 2,
        "typeratio": typeratio.vitesse,
        "unlocked": false
    },
]