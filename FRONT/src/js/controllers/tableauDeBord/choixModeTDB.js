'use strict';

import {Carte} from "../../modeles/Carte";
import {animerElement} from "../../services/animationService";

const attacherEvenementsModeInterface = (elements) => {
// Changement d'état mode "dark"
    const modeJour = () => {
        elements.sidebarOptions.style.backgroundColor = '#ff914d';
        elements.sidebarParcours.style.backgroundColor = '#2f6fc4';
        elements.body.style.backgroundColor = '#ffffff';
        elements.oiseau.setAttribute("src", "../src/images/bird-inter.svg");
        elements.iconeMode.setAttribute("src", "../src/images/sun.svg");
        elements.param.setAttribute("src", "../src/images/engrenage.svg");

        const carte = new Carte('normal');
        carte.afficher();

    };


    const modeDark = () => {
        elements.sidebarOptions.style.backgroundColor = '#043474';
        elements.sidebarParcours.style.backgroundColor = '#043474';
        elements.body.style.backgroundColor = '#5994e1';
        elements.oiseau.setAttribute("src", "../src/images/owl-inter.svg");
        elements.iconeMode.setAttribute("src", "../src/images/moon-blanc.svg");
        elements.param.setAttribute("src", "../src/images/engrenage-blanc.svg");

        const carte = new Carte('dark');
        carte.afficher();
    };


    const toggleMode = () => {
        if (elements.btnCheckbox.checked) {
            modeDark();
        } else {
            modeJour();
        }
        animerElement(elements.oiseau, 'slideInUp');
    };

    ///////////////////////
    // Event handlers
    elements.btnCheckbox.addEventListener('change', toggleMode);

};

export {attacherEvenementsModeInterface};
