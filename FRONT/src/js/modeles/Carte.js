const modesMapping = {
    normal: "https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",
    dark: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
};

const recuperationPosition = function () {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(recuperationCarte.bind(this), function() {
            alert('Récupération de votre position impossible !');
        })
    }
};

const recuperationCarte = function(position) {
    let niveauZoomCarte = 13;

    const {latitude} = position.coords;
    const {longitude} = position.coords;
    const coords = [latitude, longitude];

    let map = L.map('map').setView(coords, niveauZoomCarte);
    L.tileLayer(this.url, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
};

function Carte (mode){
    this.error = false;
    if(!modesMapping[mode]){
        console.error('Mode de carte inconnu');
        this.error = true;
        return false;
    }

    this.url = modesMapping[mode];
}

Carte.prototype.afficher = function () {
    if (!this.error) {
        recuperationPosition.bind(this)();
    }
}

export {Carte};