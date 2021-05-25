import {Parcours} from "./Parcours";

export class ParcoursGalop extends Parcours {

    constructor (coords, distance, duree) {
        super (coords, distance, duree);
        this.type = "galop";
        this.setDescription();
    }

}