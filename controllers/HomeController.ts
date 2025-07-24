import { Controller } from "../libs/Controller";

export class HomeController extends Controller {
  public home() {
    this.response.send("<h1>Page accueil !</h1>");
  }
}
