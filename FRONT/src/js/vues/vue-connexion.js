export const vueConnexion =`

<div class="page-connexion">
    <div class="container-fluid" id="container-image-accueil">
        <section id="image-accueil" class="fond-bleu">
            <div class="d-flex flex-row-reverse" id="row-checkbox">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault"><img id="icone-mode" src ="images/sun.svg"></label>
                </div>
            </div>
            <div class="row" id="row-titre">
                <div class="titre text-center">
                    Horse Mappy
                </div>
            </div>
            <div class="row align-items-end" id="row-icones">
                <div class="col-sm-3">
                    <img class="arbres" src="images/trees.svg">
                </div>
                <div class="col-sm-6">
                    <img class="arbre" src="images/tree.svg">
                </div>
                <div class="col-sm-3">
                    <img class="pointeur" src="images/location-pointer.svg">
                </div>
            </div>
        </section>
    </div>


    <!-- Séparation -->
    <div class="container-fluid">
        <section id="herbe">
            <div class="row">
                <div class="sol"></div>
            </div>
        </section>
    </div>


    <!-- Formulaire de connexion -->
    <section id="formulaire_connexion">
        <div class="fond-formulaire col-md-4 mx-auto">
            <form class="col-9 mx-auto">
                <div class="col-9 text-center mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Adresse mail <img id="icone-mail"
                            src="images/mail.png"></label>
                    <input type="email" class="form-control input-adresse-mail" id="exampleInputEmail1"
                           aria-describedby="emailHelp">
                </div>
                <div class="col-9 text-center mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Mot de passe <img id="icone-mdp"
                            src="images/mot-de-passe.png"></label>
                    <input type="password" maxlength="4" class="form-control input-mot-de-passe"
                           id="exampleInputPassword1">
                </div>
                <div class="col-9 text-center mx-auto">
                    <button type="submit" class="btn btn-light">OK !</button>
                </div>
            </form>
        </div>
    </section>
</div>
`;