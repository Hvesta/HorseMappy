export class Parcours {

    constructor(coords, distance, duration) {
        this.date = new Date();
        this.id = Date.now() + ' '.slice(-10);
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
        this.setDescription = function() {
            this.description = `Parcours au ${type} le ${this.date.getDate()}`;
        }
    }
}