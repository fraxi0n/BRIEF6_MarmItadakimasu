import { categories, recipes } from "../data/data";
import { Controller } from "../libs/Controller";

export class CategoryController extends Controller {

  public categoryPage() {
    const id =  parseInt(this.request.params.id)


    const category = categories.find ( (categorie) => categorie.id=== id )

    if(category)
    {
        const recipesTarget = recipes.filter( recipe => Math.floor(recipe.id/100) ==  id )
    
    this.response.render("pages/category" , { category ,  recipesTarget } );
    }
    else
    {
      this.response.render("pages/404")
    }
  }
}
