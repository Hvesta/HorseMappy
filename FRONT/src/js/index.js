import {App} from './App';

// const app = new App();

import {vueConnexion} from './vues/vue-connexion';
import {attacherElementsEtEvenementsModeInterface} from "../../js/choixModeInterface";
import {vueInterfaceUtilisateur} from './vues/vue-interface-utilisateur';
import {chargementDeLaCarte} from "./interface";
import {attacherElementsEtEvenementsModeConnexion} from "../../js/choixModeConnexion";
import {attacherElementsEtEvenementsConnexion} from "./connexion";
import {vueModalePostConnexionOk} from './vues/vue-modale-post-connexion-ok';
import {vueModalePostConnexionKo} from "./vues/vue-modale-post-connexion-ko";
import {Carte} from "./modeles/Carte";

const racineContenu = document.getElementById('racine_contenu');
const racineModales = document.getElementById('racine_modales');

const chargerDOMModaleConnexionOk = () => {
    racineModales.insertAdjacentHTML("beforeend", vueModalePostConnexionOk);
    racineModales.insertAdjacentHTML("beforeend", vueModalePostConnexionKo);
};

const afficherInterfaceUtilisateur = () => {
    const cssLink = document.getElementById('active-css');
    if(cssLink && cssLink.href){
        cssLink.href = 'style/style-interface.css';
    }
    racineContenu.innerHTML = vueInterfaceUtilisateur;
    const carte = new Carte('normal');
    carte.afficher();
    attacherElementsEtEvenementsModeInterface();
};


const chargerCssConnexion = () => {
    const cssLink = document.getElementById('active-css');
    if(cssLink && cssLink.href){
        cssLink.href = 'style/style-connexion.css';
    }
};


const chargerDOMConnexion = () => {
    racineContenu.innerHTML = vueConnexion;
};

const afficherVueConnexion = () => {
    chargerCssConnexion();
    chargerDOMConnexion();
    chargerDOMModaleConnexionOk();
    attacherElementsEtEvenementsModeConnexion();
    attacherElementsEtEvenementsConnexion();

};

// afficherVueConnexion();
afficherInterfaceUtilisateur();