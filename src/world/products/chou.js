const Globals = require("../Globals");

const id = Globals.chou.id;
const logo = Globals.chou.logo;
const typeratio = Globals.typeratio;

module.exports = {
    "id": id,
    "name": "Chou",
    "logo": logo,
    "cout": 4,
    "croissance": 1.07,
    "revenu": 1,
    "vitesse": 500,
    "quantite": 1,
    "timeleft": 0,
    "managerUnlocked": false,
    "paliers": [
        {
            "name": "Révoooolte !",
            "logo": logo,
            "seuil": 20,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        
        {
            "name": "C'est au sujet d'quoi est-ce ?",
            "logo": logo,
            "seuil": 50,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "C'que j'dis, tout l'monde s'en tamponne ! Je gueule, je gueule, j'pourrais gueuler dans l'cul d'un poney qu'ce s'rait pareil !",
            "logo": logo,
            "seuil": 75,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Non mais vous croyez pas qu'j'marche au sifflet ! Mais qu'est-ce que j'en ai à foutre de vos horaires ? J'arrive quand j'arrive et puis c'est tout.",
            "logo": logo,
            "seuil": 150,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Mais tout à fait ! Eh ben je dirais également que le genou peut partir dans les noix de manière assez soudaine et que ça pourrait éventuellement vous faire sortir les baloches par les oreilles. N'y voyez aucune malice !",
            "logo": logo,
            "seuil": 250,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
    ]
}