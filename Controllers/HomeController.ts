import { recipes } from "../data/data";
import { Recipe } from "../data/type";
import { Controller } from "../libs/Controller";
import type { Request, Response } from "express";

// Définition d'un contrôleur "HomeController",
// qui hérite de la classe abstraite "Controller"
export class HomeController extends Controller {

  randomRecipe : Recipe

  constructor(request: Request, response: Response)
  {
    super(request, response)
    let tempRR : Recipe
    do
    {
       tempRR = recipes [Math.floor(Math.random()* recipes.length)]
    }
  while(  tempRR.id.toString() == request.query.randomID)
    this.randomRecipe= tempRR
  }

  public homePage() {
    this.response.render("pages/homePage", {...this.getRecipe(this.randomRecipe),  id :0 } );
  }
}
