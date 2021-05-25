'use strict';

 import {ParcoursPas} from "../modeles/ParcoursPas";
import {ParcoursTrot} from "../modeles/ParcoursTrot";
import {ParcoursGalop} from "../modeles/ParcoursGalop";

const parcoursService = function() {
     const parcoursRealises = [];

     const recupererLesParcours = function() {
         return parcoursRealises.slice(); // astuce pour transmettre une COPIE du tableau et non pas une référence
     }

     const recupererUnParcours = function(id) {
         //find dans le tableau de parcours
     }

     const creerUnParcours = function(coords, distance, duree, type) {
         let parcours;
         switch (type) {
             case 'pas':
                 parcours = new ParcoursPas(coords, distance, duree);
                 break;
             case 'trot':
                 parcours = new ParcoursTrot(coords, distance, duree);
                 break;
             case 'galop':
                 parcours = new ParcoursGalop(coords, distance, duree);
                 break;
             default:
                 throw new Error('Type de parcours inconnu !');
         }

         parcoursRealises.push(parcours);

         return parcours;
     }

     const modifierUnParcours = function(id, parcours) {

     }

     const supprimerUnParcours = function(id) {

     }

     // API du service
     return {
         recupererLesParcours: recupererLesParcours,
         recupererUnParcours: recupererUnParcours,
         creerUnParcours: creerUnParcours,
         modifierUnParcours: modifierUnParcours,
         supprimerUnParcours: supprimerUnParcours

     }
}();

export {parcoursService};