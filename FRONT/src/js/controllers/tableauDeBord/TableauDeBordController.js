import {vueInterfaceUtilisateur} from "../../vues/vue-interface-utilisateur";
import {Carte} from "../../modeles/Carte";
import {attacherEvenementsModeInterface} from "./choixModeTDB";
import {animerElement} from "../../services/animationService";

const racineContenu = document.getElementById('racine_contenu');

function TableauDeBordController() {
    const elements = {};
    let carte;

    const chargerReferencesDOM = function() {
        // Elements
        // Bouton checkbox
        elements.btnCheckbox = document.querySelector('.form-check-input');

        //Fonds de couleur
        elements.sidebarOptions = document.querySelector('.options');
        elements.sidebarParcours = document.querySelector('.form');
        elements.body = document.querySelector('body');

        // Icones
        elements.oiseau = document.querySelector('.oiseau');
        elements.param = document.querySelector('.engrenage');
        elements.iconeMode = document.getElementById('icone-mode-inter');
        elements.logo = document.querySelector('.logo');

    }

    const chargerCssTdb = function() {
        const cssLink = document.getElementById('active-css');
        if (cssLink && cssLink.href) {
            cssLink.href = 'style/style-interface.css';
        }
    }

    const chargerDOM = function() {
        racineContenu.innerHTML = vueInterfaceUtilisateur;
    }

    const chargerCarte = function() {
        let mode = 'normal';
        carte = new Carte(mode);
        carte.afficher();
    }

    this.afficherVue = function () {
        chargerCssTdb();
        chargerDOM();
        chargerReferencesDOM();
        chargerCarte();
        attacherEvenementsModeInterface(elements, carte);
        animerElement(elements.oiseau, 'slideInUp');
        animerElement(elements.logo, 'bounceIn');
    }
}

export {TableauDeBordController};