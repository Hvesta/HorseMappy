import {Parcours} from "./Parcours";

export class ParcoursTrot extends Parcours {

    constructor (coords, distance, duration) {
        super (coords, distance, duration);
        this.type = "trot";
        this.setDescription();
    }

}