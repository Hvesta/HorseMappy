'use strict';
const chargementDeLaCarte = () => {


    const recuperationPosition = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(recuperationCarte, function() {
                alert('Récupération de votre position impossible !');
            })
        }
    };


    const recuperationCarte = function (position){
        let niveauZoomCarte = 13;

        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        let map = L.map('map').setView(coords, niveauZoomCarte);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    };

    recuperationPosition();

};

export {chargementDeLaCarte};