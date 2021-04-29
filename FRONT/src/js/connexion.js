'use strict';

const attacherElementsEtEvenementsConnexion = () => {


///////////////////////
// Elements

//Boutons
    const btnLogin = document.querySelector('.btn-light');

// Champs formulaires
    const inputLoginMail = document.querySelector('.input-adresse-mail');
    const inputMotDePasse = document.querySelector('.input-mot-de-passe');

// Page connexion
    const pageConnexion = document.querySelector('.page-connexion');
    const modale = document.querySelector('.modale-connexion');


//////////////////////
// Event handlers
    let utilisateurEnCours;

    btnLogin.addEventListener('click', function (e) {
        e.preventDefault();
        utilisateurEnCours = utilisateurs.find(uti => uti.mail === inputLoginMail.value);
        if (utilisateurEnCours?.pin === Number(inputMotDePasse.value)) {
            modale.addEventListener('shown.bs.modal', function () {
                btnLogin.focus()
            })
        }
    })
};

export {attacherElementsEtEvenementsConnexion};







