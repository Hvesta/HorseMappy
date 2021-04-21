import {vueConnexion} from './vues/vue-connexion';
import {attacherElementsEtEvenementsConnexion} from './connexion';
import {attacherElementsEtEvenementsMode} from "../../js/choixMode";

const racine = document.getElementById('racine');

racine.innerHTML = vueConnexion;
attacherElementsEtEvenementsConnexion();
attacherElementsEtEvenementsMode();