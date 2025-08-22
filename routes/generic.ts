import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";

const genericRouter = Router()

genericRouter.get("/", (request, response) => {
   const homeController = new HomeController(request, response);
   homeController.homePage();
});
genericRouter.get("/home", (request, response) => {
   const homeController = new HomeController(request, response);
   homeController.homePage();
});

export default genericRouter
