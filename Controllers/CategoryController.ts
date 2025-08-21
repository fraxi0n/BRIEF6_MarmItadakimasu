import { categories, recipes } from "../data/data";
import { Controller } from "../libs/Controller";
import { NavLink } from "../data/type";
import type { Request, Response } from "express";

export class CategoryController extends Controller {
   navLinks: NavLink[]; 
   constructor(request: Request, response: Response)
    {
      super(request, response)
      this.navLinks = this.getNavLink();
    }

  public categoryPage() {
    const id =  parseInt(this.request.params.id)


    const category = categories.find ( (categorie) => categorie.id=== id )

    if(category)
    {
        const recipesTarget = recipes.filter( recipe => Math.floor(recipe.id/100) ==  id )
    
    this.response.render("pages/categoryPage" , { category ,  recipesTarget , link : this.navLinks } );
    }
    else
    {
      this.response.render("pages/404Page" ,{  ressource : "category" , id : id, link : this.navLinks})
    }
  }
}
