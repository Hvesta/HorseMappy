import {Parcours} from "./Parcours";

export class ParcoursGalop extends Parcours {

    constructor (coords, distance, duration) {
        super (coords, distance, duration);
        this.type = "galop";
        this.setDescription();
    }

}