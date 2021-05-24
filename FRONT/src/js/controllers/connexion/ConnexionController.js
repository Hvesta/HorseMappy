'use strict';
import {animerElement} from "../../services/animationService";
import {vueConnexion} from "../../vues/vue-connexion";
import {vueModalePostConnexionOk} from "../../vues/vue-modale-post-connexion-ok";
import {vueModalePostConnexionKo} from "../../vues/vue-modale-post-connexion-ko";
import {utilisateurs} from '../../services/persistenceService';
import {CustomEventService} from "../../services/customEventService";
import {attacherEvenementsModeConnexion} from "./choixModeConnexion";

const racineContenu = document.getElementById('racine_contenu');
const racineModales = document.getElementById('racine_modales');

function ConnexionController(callbackChargerPage) {
    const elements = {};

    const chargerReferencesDOM = function () {
        // Boutons
        elements.btnMode = document.querySelector('.form-check-input');

        // Titre
        elements.titreAppli = document.querySelector('.titre');

        //Fonds de couleur
        elements.fondBleu = document.querySelector('.fond-bleu');
        elements.fondVert = document.querySelector('.sol');
        elements.fondFormulaire = document.querySelector('.fond-formulaire');

        // Icones
        elements.iconeMode = document.getElementById("icone-mode");
        elements.iconeMail = document.getElementById("icone-mail");
        elements.iconeMdp = document.getElementById("icone-mdp");
        elements.arbres = document.querySelector(".arbres");
        elements.arbre = document.querySelector(".arbre");
        elements.pointeur = document.querySelector(".pointeur");
        elements.danger = document.querySelector('.danger');
        elements.logo = document.querySelector('.logo');
    };

    const chargerDOMModales = () => {
        racineModales.insertAdjacentHTML("beforeend", vueModalePostConnexionOk);
        racineModales.insertAdjacentHTML("beforeend", vueModalePostConnexionKo);
    };

    const chargerCssConnexion = () => {
        const cssLink = document.getElementById('active-css');
        if(cssLink && cssLink.href){
            cssLink.href = 'style/style-connexion.css';
        }
    };

    const chargerDOM = () => {
        racineContenu.innerHTML = vueConnexion;
    };

    const attacherEvenementsLogin = () => {

        ///////////////////////
        // Elements

        //Boutons
        const btnLogin = document.querySelector('.btn-light');
        const btnFermetureModaleKo = document.querySelector('.btn-close');

        // Champs formulaires
        const inputLoginMail = document.querySelector('.input-adresse-mail');
        const inputMotDePasse = document.querySelector('.input-mot-de-passe');

        // Modales
        const modaleConnexionOKElement = document.getElementById('modale-connexion-ok');
        const modaleConnexionKoElement = document.getElementById('modale-connexion-ko');


        //////////////////////
        // Event handlers
        let utilisateurEnCours;

        const affichageModaleConnexionOk = () => {
            const myModalOk = new bootstrap.Modal(modaleConnexionOKElement);

            document.getElementById('nomUtilisateur').textContent = utilisateurEnCours.nom;

            modaleConnexionOKElement.addEventListener('shown.bs.modal', function (event) {
                //définit un timer à la fin duquel je ferme ma modale
                setTimeout(() => {
                    myModalOk.hide();
                    CustomEventService.appelerEvenement('chargerPageTableauDeBord', "Coucou c'est la Connexion!");
                }, 2000);
            });

            myModalOk.show();
        }

        const affichageModaleConnexionKo = () => {
            const myModalKo = new bootstrap.Modal(modaleConnexionKoElement);
            myModalKo.show();
            btnFermetureModaleKo.addEventListener('click', function () {
                inputLoginMail.value = '';
                inputMotDePasse.value = '';
            });
        }

        btnLogin.addEventListener('click', function (e) {
            e.preventDefault();
            utilisateurEnCours = utilisateurs.find(uti => uti.mail === inputLoginMail.value);
            if (utilisateurEnCours?.pin === Number(inputMotDePasse.value)) {
                affichageModaleConnexionOk();
            }
            else {
                affichageModaleConnexionKo();
            }
        });

    };

    const animerLesElements = function () {
        animerElement(elements.titreAppli, 'bounceIn');
        animerElement(elements.logo, 'bounceIn');
    }

    this.afficherVue = function () {
        chargerCssConnexion();
        chargerDOM();
        chargerDOMModales();
        chargerReferencesDOM();
        attacherEvenementsModeConnexion(elements);
        attacherEvenementsLogin();
        animerLesElements();
    };
}
export {ConnexionController};
