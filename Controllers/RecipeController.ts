import { Controller } from "../libs/Controller";
import { categories, ingredients, recipeComments, recipeIngredients, recipeInstructions, recipes } from "../data/data";

export class RecipeController extends Controller {

  public recipePage() {

    const id = parseInt( this.request.params.id)
    const recipe = recipes.find( recipe => recipe.id ==  id)



    if (recipe)
      {
      const ingredientsComplete = recipeIngredients.map( (rIngredient)=> { 
        if(rIngredient.recipeId==id)
          {
            const ingredientName = ingredients.find( ing => ing.id==rIngredient.id )?.name
            const ingredientComplete =  {...rIngredient, name :  ingredientName }
            return ingredientComplete
          } 
      } ).filter(ing =>!!ing ) // filtre les undefineds

      const comments = recipeComments.filter( (comment)=>  comment.recipeId==id)

      const instructions = recipeInstructions.filter( (instruction)=>  instruction.recipeId==id)

      const category =  categories.find ( cat => cat.id== Math.floor(id/100) ) 

      // console.log ("recipe"  , recipe)
      // console.log ("ingredientsComplete" , ingredientsComplete)
      // console.log ("instructions" , instructions)
      // console.log ("comments", comments)

      this.response.render("pages/recipePage",{recipe,comments, ingredientsComplete, instructions , category });
    }
    else
    {
      this.response.render("pages/404Page",{  ressource : "recipe" , id : id});
    }
  }
}
