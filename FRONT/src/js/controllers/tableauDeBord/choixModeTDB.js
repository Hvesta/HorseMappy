'use strict';

import {Carte} from "../../modeles/Carte";
import {animerElement} from "../../services/animationService";

const attacherEvenementsModeInterface = (elements, carte) => {
// Changement d'état mode "dark"
    const modeJour = () => {
        elements.sidebarOptions.style.backgroundColor = '#ff914d';
        elements.sidebarParcours.style.backgroundColor = '#2f6fc4';
        elements.body.style.backgroundColor = '#ffffff';
        elements.oiseau.setAttribute("src", "../src/images/bird-inter.svg");
        elements.iconeMode.setAttribute("src", "../src/images/sun.svg");
        elements.param.setAttribute("src", "../src/images/engrenage.svg");

        carte.changerMode('normal');
    };


    const modeDark = () => {
        elements.sidebarOptions.style.backgroundColor = '#043474';
        elements.sidebarParcours.style.backgroundColor = '#043474';
        elements.body.style.backgroundColor = '#5994e1';
        elements.oiseau.setAttribute("src", "../src/images/owl-inter.svg");
        elements.iconeMode.setAttribute("src", "../src/images/moon-blanc.svg");
        elements.param.setAttribute("src", "../src/images/engrenage-blanc.svg");
        
        carte.changerMode('dark');
    };


    const toggleMode = () => {
        if (elements.btnCheckbox.checked) {
            modeDark();
        } else {
            modeJour();
        }
        animerElement(elements.oiseau, 'slideInUp');
        animerElement(elements.logo, 'bounceIn');
    };

    ///////////////////////
    // Event handlers
    elements.btnCheckbox.addEventListener('change', toggleMode);

};

export {attacherEvenementsModeInterface};
