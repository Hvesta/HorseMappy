export class Utilisateur {
    #mail;
    #nom;
    #pin;
    #chevaux = [];
    #listeParcours = [];
    #_nbConnexion = 0;

    constructor(mail, nom, pin) {
        this.#mail = mail;
        this.#nom = nom;
        this.#pin = pin;
    }

    ajouterCheval(nomCheval){
        this.#chevaux.push(nomCheval);
    }

    ajouterParcours(parcours){
        // TODO: implémenter une vérif de type Parcours
        this.#listeParcours.push(parcours);
    }

    get nbConnexion() {
        return this.#_nbConnexion;
    }

    set nbConnexion(value) {
        this.#_nbConnexion = value;
    }
}
