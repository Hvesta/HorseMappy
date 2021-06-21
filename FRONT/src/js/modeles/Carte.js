import {CustomEventService} from "../services/customEventService";
import {parcoursService} from "../services/parcoursService";

function Carte (mode) {

    let mapLeaflet;
    let mapEvent;
    let tuiles;
    let attribution;
    let url;

    const myIcon = L.icon({
        iconUrl: './src/images/logo.svg',
        iconSize: [50, 95],
        iconAnchor: [35, 94],
        popupAnchor: [-3, -76]
    });

    const modesMapping = {
        normal: {
            url: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        },
        dark: {
            url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        },
    };

// Remplacement de cette fonction par une Promesse (chapitre => "promisifying geolocalisation API")
//     const recuperationPosition = () => {
    //     if(navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(recuperationCarte.bind(this), function() {
    //             alert('Récupération de votre position impossible !');
    //         })
    //     }
    // };



    const recuperationCarte = (position) => {
        let niveauZoomCarte = 13;

        const {latitude} = position.coords;
        const {longitude} = position.coords;
        const coords = [latitude, longitude];
        mapLeaflet = L.map('map').setView(coords, niveauZoomCarte);
        choixTuiles();
        attacherEvenementCarte();
    };

    const choixTuiles = () => {
        tuiles = L.tileLayer(url, {
            attribution: attribution
        }).addTo(mapLeaflet);
    }

    const attacherEvenementCarte = () => {
        mapLeaflet.on('click', function (mapE) {
            CustomEventService.appelerEvenement('afficherFormulaireParcours', mapE);
        });

        CustomEventService.inscrireEvenement("centrerSurMarqueur", centrerSurMarqueur);
    }


    //Rendu du marqueur avec sa pop up sur la carte
    const afficherMarqueur = (parcours) => {
        const coords = parcours.coords;
        const {lat, lng} = coords;

        L.marker([lat, lng], {icon: myIcon}).addTo(mapLeaflet)
            .bindPopup(L.popup({
                    maxWidth: 300,
                    minWidth: 200,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${parcours.type}-popup`,
                })
            )
            .setPopupContent(`
                 ${parcours.description}`)
            .openPopup();
    };


    const centrerSurMarqueur = function(coords) {
        mapLeaflet.setView(coords, 13, {
            animate: true,
            pan: {
                duration: 1
            }
        });
    }

    //Gestion d'erreur mode de la carte
    const modeCarteExiste = () => {
        this.error = false;
        if(!modesMapping[mode]){
            console.error('Mode de carte inconnu');
            this.error = true;
            return false;
        }
        return true;
    }

    if (modeCarteExiste(mode)) {
        url = modesMapping[mode].url;
        attribution = modesMapping[mode].attribution;
    }

    const recuperationGeolocalisation = () => {
        if(navigator.geolocation) {
            return new Promise(function(resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        }
    };

    const afficher = function () {
        if (!this.error) {
              recuperationGeolocalisation()
                .then(position => {
                    recuperationCarte(position);
                })
                .catch(err => alert(`Problème détecté : ${err}`));
        }
    }

    const getMapEvent = function () {
        return mapEvent;
    }

    const setMapEvent = function (mapE) {
        mapEvent = mapE;
    }

    // changement de carte au changement de mode
    const changerMode = function (mode) {
        if (modeCarteExiste(mode)){
            url = modesMapping[mode].url;
            attribution = modesMapping[mode].attribution;
            tuiles.setUrl(url);
        }
    };

    //API de l'objet Carte
    return {
        afficher: afficher,
        changerMode: changerMode,
        setMapEvent: setMapEvent,
        getMapEvent: getMapEvent,
        afficherMarqueur: afficherMarqueur
    }
}

export {Carte};