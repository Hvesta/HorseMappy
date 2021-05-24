import {Parcours} from "./Parcours";

export class ParcoursPas extends Parcours {

    constructor (coords, distance, duration) {
        super (coords, distance, duration);
        this.type = "pas";
        this.setDescription();
    }

}