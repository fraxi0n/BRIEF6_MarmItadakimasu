import { Router } from "express";
import { RecipeController } from "../Controllers/RecipeController";

const recipesRouter = Router();


recipesRouter.get("/recipe/:id", (request, response) => {

   const recipeController = new RecipeController(request, response);
   recipeController.recipePage();
})

export default recipesRouter;

