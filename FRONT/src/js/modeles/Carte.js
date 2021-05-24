function Carte (mode) {

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
        let map = L.map('map').setView(coords, niveauZoomCarte);
        console.log(this.url);

        this.tuiles = L.tileLayer(this.url, {
            attribution: this.attribution
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    };

    const modeCarteExiste = () => {
        this.error = false;
        if(!modesMapping[mode]){
            console.error('Mode de carte inconnu');
            this.error = true;
            return false;
        }
        return true;
    }

    if (modeCarteExiste(mode)){
        this.url = modesMapping[mode].url;
        this.attribution = modesMapping[mode].attribution;
    }

    const afficher = function () {
        if (!this.error) {
            // viderEmplacementCarte();
            recuperationPosition();
        }
    }

    const changerMode = function (mode) {
        if (modeCarteExiste(mode)){
            this.url = modesMapping[mode].url;
            this.attribution = modesMapping[mode].attribution;
            this.tuiles.setUrl(this.url);
        }
    };

    return {
        afficher: afficher,
        changerMode: changerMode
    }
}

export {Carte};