import { Controller } from "../libs/Controller";

// Définition d'un contrôleur "HomeController",
// qui hérite de la classe abstraite "Controller"
export class HomeController extends Controller {
  // Méthode de la classe "HomeController",
  // en charge de l'envoi de la réponse contenant
  // l'affichage HTML de la page d'accueil
  public home() {
    this.response.send("<h1>Page accueil !</h1>");
  }
}
