import { HomeController } from "../controllers/HomeController";
import booksRoutes from "./books";
import { Router } from "express";

const router = Router();

// Chemin (endpoint) -> /
// Response/Request
// Fonction (callback)
router.get("/", (request, response) => {
  const homeController = new HomeController(request, response);
  homeController.home();
});

router.use("/books", booksRoutes);

export default router;