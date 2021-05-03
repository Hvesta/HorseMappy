'use strict';

import {utilisateurs} from "./services/Persistence";

const attacherElementsEtEvenementsConnexion = () => {


///////////////////////
// Elements
    
//Boutons
    const btnLogin = document.querySelector('.btn-light');
    const btnFermetureModaleKo = document.querySelector('.btn-close');

// Champs formulaires
    const inputLoginMail = document.querySelector('.input-adresse-mail');
    const inputMotDePasse = document.querySelector('.input-mot-de-passe');

// Page connexion
    const pageConnexion = document.querySelector('.page-connexion');

// Modales
    const modaleConnexionOKElement = document.getElementById('modale-connexion-ok');
    const modaleConnexionKoElement = document.getElementById('modale-connexion-ko');



//////////////////////
// Event handlers
    let utilisateurEnCours;

    const affichageModaleConnexionOk = () => {
        const myModalOk = new bootstrap.Modal(modaleConnexionOKElement);
        document.getElementById('nomUtilisateur').textContent = utilisateurEnCours.nom;
        modaleConnexionOKElement.addEventListener('shown.bs.modal', function (event) {
            //définit un timer à la fin duquel je ferme ma modale
            setTimeout(() => myModalOk.hide(), 2000);
        })
        myModalOk.show();
    }

    const affichageModaleConnexionKo = () => {
        const myModalKo = new bootstrap.Modal(modaleConnexionKoElement);
        myModalKo.show();
        btnFermetureModaleKo.addEventListener('click', function () {
            inputLoginMail.value = '';
            inputMotDePasse.value = '';
        });
    }

    btnLogin.addEventListener('click', function (e) {
        e.preventDefault();
        utilisateurEnCours = utilisateurs.find(uti => uti.mail === inputLoginMail.value);
        if (utilisateurEnCours?.pin === Number(inputMotDePasse.value)) {
            affichageModaleConnexionOk();
            body.style.opacity = 0.33;
        }
        else {
            affichageModaleConnexionKo();
        }
    })
};

export {attacherElementsEtEvenementsConnexion};







