import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";
import { CategoryController } from "../Controllers/CategoryController";
import { RecipeController } from "../Controllers/RecipeController";

// Définition d'un routeur pour les routes principales de l'application
// Il inclut la route pour la page d'accueil et les routes liées aux livres
const router = Router();

// Route pour la page d'accueil
// Utilise la méthode `home` du `HomeController`
// pour envoyer une réponse contenant l'affichage HTML de la page d'accueil
router.get("/", (request, response) => {
   const homeController = new HomeController(request, response);
   homeController.home();
});
router.get("/home", (request, response) => {
   const homeController = new HomeController(request, response);
   homeController.home();
});
router.get("/category", (request, response) => {
   const catgoryController = new CategoryController(request, response);
   catgoryController.category();
});
router.get("/recipe", (request, response) => {
   const recipeController = new RecipeController(request, response);
   recipeController.recipe();
});

// Inclusion des routes liées aux livres
// Ces routes sont définies dans le fichier `books.ts`.
// Toutes les routes contenues dans `books.ts` seront préfixées par `/books`
// grâce à l'utilisation de `router.use()`.
// router.use("/books", booksRoutes);

export default router;