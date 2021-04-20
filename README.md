# HorseMappy

Pour lancer le projet Front en local, se placer à la racine du répertoire FRONT.
Ouvrir un terminal de commande et lancer la commande suivante:

`npm run serve`

Une configuration Webpack se charge de:
- réunir les fichiers JS en un seul
- copier les ressources de "src"" (l'index.html, le JS, le style et les images) vers un répertoire "dist"

Puis l'outil _webpack-dev-server_ se charge d'instancier un serveur Web local et d'exposer l'appli sur un port du _localhost_