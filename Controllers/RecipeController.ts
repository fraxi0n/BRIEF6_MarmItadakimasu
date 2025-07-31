import { Controller } from "../libs/Controller";
import { categories, ingredients, recipeComments, recipeIngredients, recipeInstructions, recipes , ingredientAssets} from "../data/data";

export class RecipeController extends Controller {

  public recipePage() {

    const rID = parseInt( this.request.params.id) //raccourci pour recipeID
    const recipe = recipes.find( recipe => recipe.id ==  rID)

    if (recipe)
      {
      this.response.render("pages/recipePage",this.getRecipe(recipe));
      }
    else
      {
        this.response.render("pages/404Page",{  ressource : "recipe" , id : rID});
      }
  }
}
