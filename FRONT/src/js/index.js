import {App} from './App';

// const app = new App();

import {vueConnexion} from './vues/vue-connexion';
import {attacherElementsEtEvenementsConnexion} from './connexion';
import {attacherElementsEtEvenementsMode} from "../../js/choixMode";
import {vueInterfaceUtilisateurJ} from './vues/vue-interface-utilisateur-J';
import {chargementDeLaCarte} from "./interface";

const racine = document.getElementById('racine');

racine.innerHTML = vueInterfaceUtilisateurJ;
chargementDeLaCarte();

// racine.innerHTML = vueConnexion;
// attacherElementsEtEvenementsConnexion();
// attacherElementsEtEvenementsMode();