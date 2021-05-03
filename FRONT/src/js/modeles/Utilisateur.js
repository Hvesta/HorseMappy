export class Utilisateur {

    constructor(mail, nom, pin) {
        this.mail = mail;
        this.nom = nom;
        this.pin = pin;
        this.chevaux = [];
        this.listeParcours = [];
        this._nbConnexion = 0;
    }

    ajouterCheval(nomCheval){
        this.chevaux.push(nomCheval);
    }

    ajouterParcours(parcours){
        // TODO: implémenter une vérif de type Parcours
        this.listeParcours.push(parcours);
    }

    get nbConnexion() {
        return this._nbConnexion;
    }

    set nbConnexion(value) {
        this._nbConnexion = value;
    }
}
