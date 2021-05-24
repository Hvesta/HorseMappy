import {CustomEventService} from "../services/customEventService";

function Carte (mode) {
    const parcours = [];
    let mapLeaflet;
    let mapEvent;
    let tuiles;
    let attribution;
    let url;

    const myIcon = L.icon({
        iconUrl: '../images/logo.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94]
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

    const recuperationPosition = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(recuperationCarte.bind(this), function() {
                alert('Récupération de votre position impossible !');
            })
        }
    };

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
            CustomEventService.appelerEvenement('clicSurLaCarte', mapE);
        });
    }



    //Rendu du marqueur
    const marqueurParcours = (parcours) => {
        L.marker([51.5, -0.09], {icon: myIcon}).addTo(mapLeaflet)
            .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${parcours.type}-popup`,
                })
            )
            .setPopupContent(`
                 ${parcours.description}`)
            .openPopup();
    };

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

    const afficher = function () {
        if (!this.error) {
            recuperationPosition();
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
        getMapEvent: getMapEvent
    }
}

export {Carte};