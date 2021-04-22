import {vueConnexion} from './vues/vue-connexion';
import {attacherElementsEtEvenementsConnexion} from './connexion';
import {attacherElementsEtEvenementsMode} from "../../js/choixMode";
import {vueInterfaceUtilisateur} from './vues/vue-interface-utilisateur';

const racine = document.getElementById('racine');

racine.innerHTML = vueInterfaceUtilisateur;

// racine.innerHTML = vueConnexion;
// attacherElementsEtEvenementsConnexion();
// attacherElementsEtEvenementsMode();