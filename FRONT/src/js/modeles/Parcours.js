export class Parcours {

    constructor(coords, distance, duree) {
        this.date = new Date();
        this.id = Date.now() + ' '.slice(-10);
        this.coords = coords;
        this.distance = distance;
        this.duree = duree;
        this.setDescription = function() {
            this.description = `Parcours au ${this.type} le ${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
        }
    }
}