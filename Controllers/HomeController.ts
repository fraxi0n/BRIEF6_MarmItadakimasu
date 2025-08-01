import { recipes } from "../data/data";
import { Recipe } from "../data/type";
import { Controller } from "../libs/Controller";
import type { Request, Response } from "express";

// Définition d'un contrôleur "HomeController",
// qui hérite de la classe abstraite "Controller"
export class HomeController extends Controller {

  randomRecipe : Recipe
  stringedQuery : string  

  constructor(request: Request, response: Response)
  {
    super(request, response)

    const exludeIDs :string[] = []

    this.stringedQuery  = ""
    if (request.query.excludeID)
    {
      this.stringedQuery+=request.query.excludeID.toString()
    }

    let tempRR : Recipe
    let fuseIndex = 0 
    do
    {
      tempRR = recipes [Math.floor(Math.random()* recipes.length)]
      fuseIndex++
      if (fuseIndex>100)
      {
        this.stringedQuery=""
      }
    }
  while( this.stringedQuery  && this.stringedQuery.split(" ").includes(tempRR.id.toString()))
    this.randomRecipe= tempRR
  }

  public homePage() {
    this.response.render("pages/homePage", {...this.getRecipe(this.randomRecipe),  id :this.randomRecipe.id , query : this.stringedQuery } );
  }
}
