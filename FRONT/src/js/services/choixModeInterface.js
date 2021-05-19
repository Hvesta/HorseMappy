'use strict';

import {Carte} from "../modeles/Carte";

const attacherElementsEtEvenementsModeInterface = () => {

///////////////////////
// Elements

// Bouton checkbox
const btnCheckbox = document.querySelector('.form-check-input');

//Fonds de couleur
const sidebarOptions = document.querySelector('.options');
const sidebarParcours = document.querySelector('.form');
const body = document.querySelector('body');

// Icones
const oiseau = document.querySelector('.oiseau');
const iconeMode = document.getElementById('icone-mode-inter');
const param = document.querySelector('.engrenage');


/////////////////////
// Changement d'état mode "dark"
 const modeJour = () => {
     sidebarOptions.style.backgroundColor = '#ff914d';
     sidebarParcours.style.backgroundColor = '#2f6fc4';
     body.style.backgroundColor = '#ffffff';
     oiseau.setAttribute("src", "./src/images/bird-inter.svg");
     iconeMode.setAttribute("src", "./src/images/sun.svg");
     param.setAttribute("src", "./src/images/engrenage.svg");
     const carte = new Carte('normal');
     carte.afficher();

 };


 const modeDark = () => {
     sidebarOptions.style.backgroundColor = '#043474';
     sidebarParcours.style.backgroundColor = '#043474';
     body.style.backgroundColor = '#5994e1';
     oiseau.setAttribute("src", "./src/images/owl-inter.svg");
     iconeMode.setAttribute("src", "./src/images/moon-blanc.svg");
     param.setAttribute("src", "./src/images/engrenage-blanc.svg");

     const carte = new Carte('dark');
     carte.afficher();
 };


 const toggleScreenMode = () => {
        if (btnCheckbox.checked){
            modeDark();
        } else {
            modeJour();
        }
 };

 ///////////////////////
 // Event handlers

 btnCheckbox.addEventListener('change', toggleScreenMode);

};

export {attacherElementsEtEvenementsModeInterface};
