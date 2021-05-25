import {Parcours} from "./Parcours";

export class ParcoursPas extends Parcours {

    constructor (coords, distance, duree) {
        super (coords, distance, duree);
        this.type = "pas";
        this.setDescription();
    }

}