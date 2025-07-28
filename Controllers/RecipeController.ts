import { Controller } from "../libs/Controller";

export class RecipeController extends Controller {

  public recipe() {
    this.response.render("pages/recipe");
  }
}
