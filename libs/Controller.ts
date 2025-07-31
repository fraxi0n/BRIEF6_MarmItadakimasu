import type { Request, Response } from "express";
import { Recipe } from "../data/type";
import { recipeIngredients, ingredients, ingredientAssets, recipeComments, recipeInstructions, categories } from "../data/data";

// La classe "Controller" est une classe abstraite
// qui sert de base pour tous les contrôleurs
// de l'application.

// Elle contient les propriétés
// `request` et `response` qui sont utilisées
// pour accéder à la requête et à la réponse
// dans les méthodes des contrôleurs qui en héritent.
export abstract class Controller {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  protected getRecipe (recipe:Recipe) 
  {
    const rID = recipe.id
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
      return {recipe,comments, ingredientsComplete, instructions , category }
  }




}