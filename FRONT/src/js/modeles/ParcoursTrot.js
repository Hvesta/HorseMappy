import {Parcours} from "./Parcours";

export class ParcoursTrot extends Parcours {

    constructor (coords, distance, duree) {
        super (coords, distance, duree);
        this.type = "trot";
        this.setDescription();
    }

}