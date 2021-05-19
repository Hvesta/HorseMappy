import {vueInterfaceUtilisateur} from "../vues/vue-interface-utilisateur";
import {Carte} from "../modeles/Carte";
import {attacherElementsEtEvenementsModeInterface} from "../services/choixModeInterface";

const racineContenu = document.getElementById('racine_contenu');
const racineModales = document.getElementById('racine_modales');

function TableauDeBordController() {
    this.afficherVue = function () {
        const cssLink = document.getElementById('active-css');
        if(cssLink && cssLink.href){
            cssLink.href = 'style/style-interface.css';
        }
        racineContenu.innerHTML = vueInterfaceUtilisateur;
        const carte = new Carte('normal');
        carte.afficher();
        attacherElementsEtEvenementsModeInterface();
    }
}

export {TableauDeBordController};