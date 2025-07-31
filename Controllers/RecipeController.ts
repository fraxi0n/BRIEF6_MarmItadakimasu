import { Controller } from "../libs/Controller";
import { categories, ingredients, recipeComments, recipeIngredients, recipeInstructions, recipes , ingredientAssets} from "../data/data";

export class RecipeController extends Controller {

  public recipePage() {

    const rID = parseInt( this.request.params.id) //raccourci pour recipeID
    const recipe = recipes.find( recipe => recipe.id ==  rID)



    if (recipe)
      {
      const ingredientsComplete = recipeIngredients.map( (rIngredient)=> { 
        if( rIngredient.recipeId== rID )
          {
            const iID = rIngredient.ingredientId //raccourci pour ingrédientID
            const ingredientName = ingredients.find( ing => ing.id==iID  )?.name
            const ingredientAssetPath = ingredientAssets.find( asset => asset.ingredientID== iID )?.path

            const ingredientComplete =  {...rIngredient, name :  ingredientName  , assetPath : ingredientAssetPath }
            return ingredientComplete
          } 
      } ).filter(ing =>!!ing ) // filtre les undefineds

      const comments = recipeComments.filter( (comment)=>  comment.recipeId==rID)

      const instructions = recipeInstructions.filter( (instruction)=>  instruction.recipeId==rID)

      const category =  categories.find ( cat => cat.id== Math.floor(rID/100) ) 

      // console.log ("recipe"  , recipe)
      // console.log ("ingredientsComplete" , ingredientsComplete)
      // console.log ("instructions" , instructions)
      // console.log ("comments", comments)

      this.response.render("pages/recipePage",{recipe,comments, ingredientsComplete, instructions , category });
    }
    else
    {
      this.response.render("pages/404Page",{  ressource : "recipe" , id : rID});
    }
  }
}
