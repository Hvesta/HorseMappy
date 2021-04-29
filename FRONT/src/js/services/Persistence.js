import {Utilisateur} from "../modeles/Utilisateur";

const utilisateur1 = new Utilisateur("f.laba@me.fr", 'Flore Labadie', 1111);
utilisateur1.ajouterCheval('Lord');
utilisateur1.nbConnexion = 25;


const utilisateur2 = new Utilisateur("a.dubois@me.fr", 'Amine Dubois', 2222);
utilisateur2.ajouterCheval('Gursule');
utilisateur2.ajouterCheval('As du Gué');
utilisateur2.ajouterCheval('Oedipe');
utilisateur2.nbConnexion = 76;


const utilisateur3 = new Utilisateur("s.helm@me.fr", "Sarah Helmstedt", 3333);
utilisateur3.ajouterCheval('Climat d\Olympe');
utilisateur3.ajouterCheval('Altar');
utilisateur3.nbConnexion = 54;


const utilisateurs = [utilisateur1, utilisateur2, utilisateur3];


export {utilisateurs};