import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";
import { ErrorController } from "../Controllers/ErrorController";

const genericRouter = Router()

genericRouter.get("/", (request, response) => {
   const homeController = new HomeController(request, response);
   homeController.homePage();
});
genericRouter.get("/home", (request, response) => {
   const homeController = new HomeController(request, response);
   homeController.homePage();
});
genericRouter.get("/not-found", (request, response) => {
      const errorController = new ErrorController(request, response);
   errorController.error404();

});

export default genericRouter
