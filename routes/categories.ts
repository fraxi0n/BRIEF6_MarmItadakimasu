import { Router } from "express";
import { CategoryController } from "../Controllers/CategoryController";

const categoriesRouter = Router();

categoriesRouter.get("/category/:id", (request, response) => {
   const catgoryController = new CategoryController(request, response);
   catgoryController.categoryPage();
});
;
export default categoriesRouter;