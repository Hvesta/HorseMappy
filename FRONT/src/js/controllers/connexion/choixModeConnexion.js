'use strict';

import {animerElement} from "../../services/animationService";

const attacherEvenementsModeConnexion = (elements) => {

    const basculerModeJour = function() {
        elements.fondBleu.style.backgroundColor = '#2f6fc4';
        elements.fondVert.style.backgroundColor = '#6fc24b';
        elements.fondFormulaire.style.backgroundColor = '#ff914d';
        elements.titreAppli.style.color = '#ff914d';
        elements.iconeMode.setAttribute("src", "images/sun.svg");
        elements.iconeMail.setAttribute("src", "images/mail.png");
        elements.iconeMdp.setAttribute("src", "images/mot-de-passe.png");
        elements.arbres.setAttribute("src", "images/trees-bird.svg");
        elements.arbre.setAttribute("src", "images/tree.svg");
        elements.pointeur.setAttribute("src", "images/location-pointer.svg");
        elements.logo.setAttribute("src", "images/logo.svg");
        elements.danger.setAttribute("src", "images/danger.svg");
    }

    const basculerModeDark = function() {
        elements.fondBleu.style.backgroundColor = '#043474';
        elements.fondVert.style.backgroundColor = '#3C069F';
        elements.fondFormulaire.style.backgroundColor = '#5994e1';
        elements.titreAppli.style.color = '#5994e1';
        elements.iconeMode.setAttribute("src", "images/moon-blanc.svg");
        elements.iconeMail.setAttribute("src", "images/mail-blanc.png");
        elements.iconeMdp.setAttribute("src", "images/mot-de-passe-blanc.png");
        elements.arbres.setAttribute("src", "images/trees-owl-blanc.svg");
        elements.arbre.setAttribute("src", "images/tree-blanc.svg");
        elements.pointeur.setAttribute("src", "images/location-pointer-blanc.svg");
        elements.logo.setAttribute("src", "images/logo-blanc.svg");
        elements.danger.setAttribute("src", "images/danger-blanc.svg");
    }

    const toggleMode = () => {
        if (elements.btnMode.checked){
            basculerModeDark();
        } else {
            basculerModeJour();
        }
        animerElement(elements.titreAppli, 'bounceIn');
        animerElement(elements.logo, 'bounceIn');
    };

    // Event handlers
    elements.btnMode.addEventListener('change', toggleMode);
}

export {attacherEvenementsModeConnexion};