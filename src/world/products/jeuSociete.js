const Globals = require("../Globals");

const id = Globals.jeuSociete.id;
const logo = Globals.jeuSociete.logo;
const typeratio = Globals.typeratio;

module.exports = {
    "id": id,
    "name": "Jeu de société",
    "logo": logo,
    "cout": 720,
    "croissance": 1.14,
    "revenu": 540,
    "vitesse": 6000,
    "quantite": 0,
    "timeleft": 0,
    "managerUnlocked": false,
    "paliers": [
        {
            "name": "PAYS DE GALLE INDÉPENDANT !",
            "logo": logo,
            "seuil": 20,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Le code c'est \"le code\" ? Ça va, ils se sont pas trop cassé le bonnet, pour l'trouver celui-là !",
            "logo": logo,
            "seuil": 50,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
            "logo": logo,
            "seuil": 100,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "PAYS DE GALLE INDÉPENDANT !",
            "logo": logo,
            "seuil": 125,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "C’est pas moi qui explique mal, c’est les autres qui sont cons.",
            "logo": logo,
            "seuil": 150,
            "idcible": id,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Au printemps, j’aime bien pisser du haut des remparts au lever du soleil... Y’a une belle vue ! \n [Vous êtes sensible.] \n Au froid ? Ouais, hyper ; c'est pour ça que j'attends le printemps",
            "logo": logo,
            "seuil": 175,
            "idcible": id,
            "ratio": 5,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Je voudrais pas faire ma raclette, mais la soirée s'annonce pas super.",
            "logo": logo,
            "seuil": 200,
            "idcible": id,
            "ratio": 5,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "La patience est un plat qui se mange sans sauce.",
            "logo": logo,
            "seuil": 250,
            "idcible": id,
            "ratio": 5,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        

        //L'ubiquité, c'est pas quand il y a des infiltrations ?
        //Après demain, à partir d'aujourd'hui ?
        //Y'a du grabuge alors on appelle les 2 couillons... On met les glandus à profit !
        //C’est marrant les petits bouts de fromage par terre. C’est ça que vous appelez une fondue ? 
        //Dans la vie, j’avais deux ennemis : le vocabulaire et les épinards. Maintenant j’ai la botte secrète, et je bouffe plus d’épinards. Merci, de rien, au revoir messieurs-dames. 
        //Les 3 actes, c'est les bonnes femmes qui sont mi-taupes mi-déesses, et qui ont forcé les mecs de Bethléem à construire les pyramides.
        /*Vous me prenez pour un con, non ?

    Arthur répond : Pas du tout. Les poissons, eux en revanche, vous prennent certainement pour un con.*/

    //Ah ça y’est, j’viens de comprendre à quoi ça sert la canne. En fait ça sert à rien… Du coup ça nous renvoie à notre propre utilité : l’Homme face à l’Absurde !
    // C’est pas parce que le tunnel va de notre quartier général à Kaamelott qu’il va de Kaamelott à notre quartier général ! 
    ]
}