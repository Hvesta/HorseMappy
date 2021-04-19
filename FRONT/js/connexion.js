'use strict';

//////////////////////
// Data

const utilisateur1 = {
    mail: "f.laba@me.fr",
    nom: 'Flore Labadie',
    chevaux: ['Lord'],
    parcours: [],
    pin: 1111,
    nbConnexion: 25,
}

const utilisateur2 = {
    mail: "a.dubois@me.fr",
    nom: 'Amine Dubois',
    chevaux: ['Gursule', 'As du Gué', 'Oedipe'],
    parcours: [],
    pin: 2222,
    nbConnexion: 76,
}

const utilisateur3 = {
    mail: "s.helm@me.fr",
    nom: 'Sarah Helmstedt',
    chevaux: ['Climat d\'Olympe', 'Altar'],
    parcours: [],
    pin: 3333,
    nbConnexion: 54,
}

const utilisateurs = [utilisateur1, utilisateur2, utilisateur3];


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