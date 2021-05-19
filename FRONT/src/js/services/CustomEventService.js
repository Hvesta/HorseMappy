const CustomEventService = function () {

    const evenements = {};

    const inscrireEvenement = function (nomEvenement, callback) {
        if (!nomEvenement){
            throw new Error(`Erreur dans "inscrireEvenement()": le paramètre 'nomEvenement' doit être une chaîne de caractère non-vide.`);
        }
        if (typeof callback !== 'function') {
            throw new Error(`Erreur dans "inscrireEvenement(${nomEvenement})": le paramètre 'callback' doit être une fonction.`);
        }
        evenements[nomEvenement] = function (data) {
            callback(data);
        };
    };

    const appelerEvenement = function (nomEvenement, data) {
        if (!nomEvenement){
            throw new Error(`Erreur dans "appelerEvenement()": le paramètre 'nomEvenement' doit être une chaîne de caractère non-vide.`);
        }
        if (!evenements[nomEvenement]) {
            throw new Error(`Erreur dans "appelerEvenement()": l'évenèment "${nomEvenement}" n'existe pas`);
        }
        evenements[nomEvenement](data);

    };

    const desinscrireEvenement = function (nomEvenement) {
        if (!nomEvenement){
            throw new Error(`Erreur dans "appelerEvenement()": le paramètre 'nomEvenement' doit être une chaîne de caractère non-vide.`);
        }
        if (!evenements[nomEvenement]) {
            throw new Error(`Erreur dans "appelerEvenement()": l'évenèment "${nomEvenement}" n'existe pas`);
        }
        delete evenements[nomEvenement];
    }

    return {
        inscrireEvenement: inscrireEvenement,
        appelerEvenement: appelerEvenement,
        desinscrireEvenement: desinscrireEvenement
    };
}();

export {CustomEventService};