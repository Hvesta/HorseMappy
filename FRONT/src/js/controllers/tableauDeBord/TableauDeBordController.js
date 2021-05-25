import {vueInterfaceUtilisateur} from "../../vues/vue-interface-utilisateur";
import {Carte} from "../../modeles/Carte";
import {attacherEvenementsModeInterface} from "./choixModeTDB";
import {AnimationService} from "../../services/animationService";
import {CustomEventService} from "../../services/customEventService";
import {Parcours} from "../../modeles/Parcours";
import {parcoursService} from "../../services/parcoursService";

const racineContenu = document.getElementById('racine_contenu');

function TableauDeBordController() {
    const elements = {};
    let carte;

    const chargerReferencesDOM = function() {
        // Elements
        // Bouton checkbox
        elements.btnCheckbox = document.querySelector('.form-check-input');

        // Formulaires
        elements.form = document.querySelector('.form');
        elements.containerWorkouts = document.querySelector('.workouts');
        elements.inputType = document.querySelector('.form__input--type');
        elements.inputDistance = document.querySelector('.form__input--distance');
        elements.inputDuration = document.querySelector('.form__input--duration');
        elements.inputNote= document.querySelector('.form__input--note');

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

    const afficherFormulaireParcours = function () {
            elements.form.classList.remove('hidden');
    }

    const soumissionFormulaire = function() {
        //1. Vérification des données du formulaire
        verifierChampsFormulaire();

        //2. Création nouveau parcours
        const coords = carte.getMapEvent().latlng;
        const nouveauParcours = parcoursService.creerUnParcours(coords, +elements.inputDistance.value, +elements.inputDuration.value, elements.inputType.value);

        //3. Mettre à jour liste IHM des parcours
        afficherParcoursDansListe(nouveauParcours);

        //4. Ajout du marqueur sur la carte
        carte.afficherMarqueur(nouveauParcours);

        //5. On cache le formulaire et on remet à zéro les champs
        resetFormulaire();
    }

    const afficherParcoursDansListe = function (parcours) {
        let html = `
        <li class="workout workout--${parcours.type}" data-id="${parcours.id}">
              <h2 class="workout__title">${parcours.description}</h2>
              <div class="workout__details">
                <span class="workout__value">${parcours.distance}</span>
                <span class="workout__unit">km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${parcours.duree}</span>
                <span class="workout__unit">min</span>
              </div>
        </li>`;

        elements.form.insertAdjacentHTML('afterend', html);
    }

    const resetFormulaire = function () {
        // Empty inputs
        elements.inputDistance.value = elements.inputDuration.value =  '';
        elements.form.style.display = 'none';
        elements.form.classList.add('hidden');
        setTimeout(() => elements.form.style.display = 'grid', 1000);
    };

    const verifierChampsFormulaire = function() {
        //TODO!
        const validInputs = (...inputs) =>
            inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    }

    const inscrireLesEvenements = function() {
        CustomEventService.inscrireEvenement('clicSurLaCarte', function (mapE) {
            carte.setMapEvent(mapE);
            afficherFormulaireParcours();
        });

        CustomEventService.inscrireEvenement('submitFormulaire', soumissionFormulaire);
    }

    const animerLesElements = function() {
        AnimationService.animerElement(elements.oiseau, 'slideInUp');
        AnimationService.animerElement(elements.logo, 'bounceIn');
    }

    this.afficherVue = function () {
        chargerCssTdb();
        chargerDOM();
        chargerReferencesDOM();
        chargerCarte();
        attacherEvenementsModeInterface(elements, carte);
        inscrireLesEvenements();
        animerLesElements();
    }
}

export {TableauDeBordController};