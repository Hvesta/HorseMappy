import {ConnexionController} from "./controllers/ConnexionController";
import {TableauDeBordController} from "./controllers/TableauDeBordController";
import {CustomEventService} from "./services/CustomEventService";

const App = function (){

    const modes = {
        NORMAL: 'normal',
        DARK: 'dark'
    };

    const pages = {
        CONNEXION: 'Connexion',
        TABLEAU_DE_BORD: 'TableauDeBord',
    }

    let modeCourant = modes.NORMAL;
    let pageCourante;
    let controller;

    const chargerPage = function (page){

        switch (page) {
            case pages.CONNEXION:
                controller = new ConnexionController();
                pageCourante = pages.CONNEXION;
                break;
            case pages.TABLEAU_DE_BORD:
                controller = new TableauDeBordController();
                pageCourante = pages.TABLEAU_DE_BORD;
                break;
            default:
                throw new Error(`Page "${page}" inconnue`);
        }
        controller.afficherVue();

        CustomEventService.inscrireEvenement('chargerPageTableauDeBord', function (data) {
            console.log("Dans chargerPageTableauDeBord()", data);
            chargerPage(pages.TABLEAU_DE_BORD);
        });
    }

    this.demarrer = function(){
        chargerPage(pages.CONNEXION);
    };
}

export {App};