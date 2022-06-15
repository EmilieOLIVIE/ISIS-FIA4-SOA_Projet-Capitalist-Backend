const Globals = require("../Globals");

const id = Globals.catapulte.id;
const logo = Globals.catapulte.logo;
const typeratio = Globals.typeratio;

module.exports = {
    "id": id,
    "name": "Catapulte",
    "logo": logo,
    "cout": 10e4,
    "croissance": 1.12,
    "revenu": 5e4,
    "vitesse": 24e3,
    "quantite": 0,
    "timeleft": 0,
    "managerUnlocked": false,
    "paliers": [
        {
            "name": "Moi j’ai appris à lire, eh ben je souhaite ça à personne.",
            "logo": logo,
            "seuil": 50,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Vous avez été marié comme moi ; vous savez que la monstruosité peut prendre des formes très diverses.",
            "logo": logo,
            "seuil": 100,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Ma parole, un engin comme vous, ça devrait être livré avec une notice !",
            "logo": logo,
            "seuil": 150,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Personnellement, la condition paysanne, j'me la taille en biseau.",
            "logo": logo,
            "seuil": 200,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Je ne pense pas que deux trous-du-cul soient plus efficaces qu’un seul !",
            "logo": logo,
            "seuil": 250,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        }, 
        {
            "name": "Je dis déjà pas merci dans ma langue, alors je risque pas de l’apprendre en picte.",
            "logo": logo,
            "seuil": 300,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        }, 

        //En tout cas, on a cramé leur tueur, s'ils veulent le récupérer, il est facile à transporter. 
        //Oh, la fierté… Si j’avais dû être à cheval là-dessus, je vous aurais pas épousée, déjà. 
        //C'est quand même formidabe ce pays, faut galopper à coté de la route pour pas se casser la gueule. 
        //Sans vouloir la ramener, la seule différence concrète avec des briques, c’est que vous appelez ça des tartes ! 
    ]
}