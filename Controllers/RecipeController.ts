import { Controller } from "../libs/Controller";
import { categories, ingredients, recipeComments, recipeIngredients, recipeInstructions, recipes , ingredientAssets} from "../data/data";
import { NavLink } from "../data/type";
import type { Request, Response } from "express";

export class RecipeController extends Controller {
  navLinks: NavLink[]; 
   constructor(request: Request, response: Response)
    {
      super(request, response)
      this.navLinks = this.getNavLink();
    }

  public recipePage() {

    const rID = parseInt( this.request.params.id) //raccourci pour recipeID
    const recipe = recipes.find( recipe => recipe.id ==  rID)

    if (recipe)
      {
      this.response.render("pages/recipePage",{ ...this.getRecipe(recipe), link: this.navLinks });
      }
    else
      {
        this.response.render("pages/404Page",{  ressource : "recipe" , id : rID , link : this.navLinks});
      }
  }
}
