const Globals = require("../Globals");

const catapulteAngelUpgrades = require("./product/catapulteAngelUpgrades");
const chevalierAngelUpgrades = require("./product/chevalierAngelUpgrades");
const chouAngelUpgrades = require("./product/chouAngelUpgrades");
const graalAngelUpgrades = require("./product/graalAngelUpgrades");
const jambonAngelUpgrades = require("./product/jambonAngelUpgrades");
const jeuSocieteAngelUpgrades = require("./product/jeuSocieteAngelUpgrades");

const allId = Globals.all.id;
const angelLogo = Globals.angels.logo;
const typeratio = Globals.typeratio;

module.exports = [
    {
        "name": "Qu'est-ce qui est petit et marron ? \n [Un marron.] \n Putain, il est fort ce con.",
        "logo": angelLogo,
        "seuil": 10,
        "idcible": allId,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Mais moi je viens pas vous emmerder quand vous cramez des sorcières, alors foutez-moi la paix.",
        "logo": angelLogo,
        "seuil": 100,
        "idcible": allId,
        "ratio": 2,
        "typeratio": typeratio.vitesse,
        "unlocked": false
    },
    {
        "name": "Mais évidemment, c'est sans alcool !",
        "logo": angelLogo,
        "seuil": 1000,
        "idcible": allId,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Vous n’êtes pas le plus fort, Môssieur Élias ! Quand on confond un clafoutis et UNE PART de clafoutis, on vient pas la ramener !",
        "logo": angelLogo,
        "seuil": 1e6,
        "idcible": allId,
        "ratio": 2,
        "typeratio": typeratio.vitesse,
        "unlocked": false
    },
    {
        "name": "Alors le chevalier il crie au Romain : Hé ! Vous vous prenez pour le Colisée ?",
        "logo": angelLogo,
        "seuil": 1e9,
        "idcible": allId,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    ...chouAngelUpgrades,
    ...jambonAngelUpgrades,
    ...jeuSocieteAngelUpgrades,
    ...chevalierAngelUpgrades,
    ...catapulteAngelUpgrades,
    ...graalAngelUpgrades
]

/*
    {
        "name": "Je sens que de grandes choses vont se jouer autour de cette table, Arthur",
        "logo": "icones/dame_du_lac.png",
        "seuil": 10,
        "idcible": Globals.all.id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Laisse-toi guider par ton destin",
        "logo": "icones/dame_du_lac.png",
        "seuil": 100,
        "idcible": Globals.all.id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },
    {
        "name": "Celui avec les jolis yeux bleus, là ? Très gros potentiel",
        "logo": "icones/dame_du_lac.png",
        "seuil": 10,
        "idcible": Globals.all.id,
        "ratio": 2,
        "typeratio": typeratio.gain,
        "unlocked": false
    },

*/