const Globals = require("../../Globals");

const id = Globals.graal.id;
const logo = Globals.graal.logo;
const typeratio = Globals.typeratio;

module.exports = {
    "id": id,
    "name": "Graal",
    "logo": logo,
    "cout": 1.2e6,
    "croissance": 1.11,
    "revenu": 62e4,
    "vitesse": 96e3,
    "quantite": 0,
    "timeleft": 0,
    "managerUnlocked": false,
    "paliers": [
        {
            "name": "Non, moi j'crois qu'il faut qu’vous arrêtiez d'essayer d'dire des trucs. Ça vous fatigue, déjà, et pour les autres, vous vous rendez pas compte de c'que c'est... Moi quand vous faites ça, ça me fout une angoisse... J'pourrais vous tuer, j'crois. De chagrin, hein ! J'vous jure c'est pas bien. Il faut plus que vous parliez avec des gens.",
            "logo": logo,
            "seuil": 50,
            "idcible": 5,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Ah, mais des tanches pareilles, on devrait les mettre sous verre, hein !",
            "logo": logo,
            "seuil": 100,
            "idcible": 1,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Merlin, il sait déjà pas monter des blancs en neige, alors préparer une potion de polymorphie... Permettez-moi d'avoir des doutes.",
            "logo": logo,
            "seuil": 150,
            "idcible": 1,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
        {
            "name": "Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?",
            "logo": logo,
            "seuil": 200,
            "idcible": 5,
            "ratio": 2,
            "typeratio": typeratio.gain,
            "unlocked": false
        },
        {
            "name": "Ah bah ça change oui ! Un type tout nu qui balance des assiettes !",
            "logo": logo,
            "seuil": 250,
            "idcible": 5,
            "ratio": 2,
            "typeratio": typeratio.vitesse,
            "unlocked": false
        },
    ]

    //Ça vous fait pas mal à la tête de glandouiller vingt-quatre heures sur vingt-quatre ?
    //J'en ai rien à foutre ! Vous pourriez vous marier avec une chèvre si ça vous chante. Et puis, si y en a une qu'est d'accord, rappelez-vous qu'c'est inespéré puis sautez sur l'occasion.
    //Me parler ? A c'te heure-ci ? Vous voulez mon pied au cul ?
    //Mais mariez-vous avec qui vous voulez et allez crever.

    //Fleur, unique, belle, vite ! J'ai besoin d'exprimer mon transport. [Pour le transport, vaut mieux la brouette !]

    //Le plus intéressant, c'est : comment vous arrivez à faire un truc aussi immonde avec des ingrédients normaux ? [...] Mais c'est incroyable, j'ai l'impression de bouffer de la terre avec de la bouse et du gravier, ça sent le poulailler, mais c'est du céleri et des oignons... C'est prodigieux.
    //Mais vous êtes pas mort, espèce de connard ?

    //Et si je vous dis que vous êtes deux glands, là, vous avez du péremptoire. C’est vous qui voyez.

    //Est-ce que vous avez conscience que j'ai de menues responsabilités au sein de ce gouvernement qui me tiennent relativement éloigné des problèmes de répartition des piaules ?

    //Bohort, je vous donne l'ordre de vous rendre immédiatement en Andalousie pour y rencontrer le chef wisigoth et lui transmettre le message de paix suivant :... « Coucou »...

    //La religion c'est le bordel, admettez-le ! Alors laissez-moi prier c'que j'veux tranquille. 'M'empêche pas d'la chercher, votre saloperie de Graal.

    //Je pense que vous glandouillez bien assez comme ça dans la réalité pour qu'on puisse se permettre d'optimiser le fictionnel.
    //Vous vous entrainez à mettre le merdier ?!?

    //Non mais... Que vous soyez débile c'est une chose, mais là y a de la mauvaise volonté quand même !
    //MAIS C'EST PAS POSSIBLE QUE LA DAME DU LAC ELLE SACHE PAS NAGER !!!

    //Arrêtez de m'appeler Sire.
    
    //Quand vous voyez des gadins de 15 pieds de haut plantés en rond, figurez-vous qu'ils ont pas poussé dans la nuit.
    // Je sais pas si, comme le veut le dicton, les meilleurs s'en vont les premiers, ce dont je suis sûr c'est que les trous du cul s'en vont les derniers. 
}