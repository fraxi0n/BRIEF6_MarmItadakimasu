import { categories, recipes } from "../data/data";
import { Controller } from "../libs/Controller";

export class CategoryController extends Controller {

  public categoryPage() {
    const id =  parseInt(this.request.params.id)


    const desc = categories.find ( (categorie) => { if (categorie.id= id) { return categorie.description}  })

    this.request.params.id


  const recipesTarget = recipes.filter( recipe => Math.floor(recipe.id/100) ==  id )
    
    this.response.render("pages/category" , { desc ,recipesTarget } );
  }
}
