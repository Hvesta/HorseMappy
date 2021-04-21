'use strict';

///////////////////////
// Elements

// Titre
const titreAppli = document.querySelector('.titre');

//Fonds de couleur
const fondBleu = document.querySelector('.fond-bleu');
const fondVert = document.querySelector('.sol');
const fondFormulaire = document.querySelector('.fond-formulaire');

// Icones
const iconeMode = document.getElementById("icone-mode");
const iconeMail = document.getElementById("icone-mail");
const iconeMdp = document.getElementById("icone-mdp");
const arbres = document.querySelector(".arbres");
const arbre = document.querySelector(".arbre");
const pointeur = document.querySelector(".pointeur");


///////////////////////
// Changement d'état mode "dark"

const modeJour = function() {
    fondBleu.style.backgroundColor = '#2f6fc4';
    fondVert.style.backgroundColor = '#6fc24b';
    fondFormulaire.style.backgroundColor = '#ff914d';
    titreAppli.style.color = '#ff914d';
    iconeMode.setAttribute("src", "images/sun.png");
    iconeMail.setAttribute("src", "images/mail.png");
    iconeMdp.setAttribute("src", "images/mot-de-passe.png");
    arbres.setAttribute("src", "images/trees-bird.svg");
    arbre.setAttribute("src", "images/tree.svg");
    pointeur.setAttribute("src", "images/location-pointer.svg");
}

const modeDark = function() {
    fondBleu.style.backgroundColor = '#043474';
    fondVert.style.backgroundColor = '#3C069F';
    fondFormulaire.style.backgroundColor = '#5994e1';
    titreAppli.style.color = '#5994e1';
    iconeMode.setAttribute("src", "images/lune.png");
    iconeMail.setAttribute("src", "images/mail-blanc.png");
    iconeMdp.setAttribute("src", "images/mot-de-passe-blanc.png");
    arbres.setAttribute("src", "images/trees-owl-blanc.svg");
    arbre.setAttribute("src", "images/tree-blanc.svg");
    pointeur.setAttribute("src", "images/location-pointer-blanc.svg");
}

const toggleScreenMode = () => {
    console.log(btnMode);
    if (btnMode.checked){
        modeDark();
    } else {
        modeJour();
    }
};

//////////////////////
// Event handlers

btnMode.addEventListener('change', toggleScreenMode);