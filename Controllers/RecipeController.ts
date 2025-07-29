import { Controller } from "../libs/Controller";
import { recipes } from "../data/data";

export class RecipeController extends Controller {

  public recipePage() {

    const id = parseInt( this.request.params.id)
    const recipe = recipes.find( recipe => recipe.id ==  id)


    //todo ¨PLEIN DE DATA"


    if (recipe)
    {
      this.response.render("pages/recipe",{recipe});
    }
    else
    {
      this.response.render("pages/not-found");
    }
  }
}
