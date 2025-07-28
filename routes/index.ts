import { Router } from "express";

// Définition d'un routeur pour les routes principales de l'application
// Il inclut la route pour la page d'accueil et les routes liées aux livres
const router = Router();

// Route pour la page d'accueil
// Utilise la méthode `home` du `HomeController`
// pour envoyer une réponse contenant l'affichage HTML de la page d'accueil
router.get("/", (request, response) => {
  // const homeController = new HomeController(request, response);
  // homeController.home();
});

// Inclusion des routes liées aux livres
// Ces routes sont définies dans le fichier `books.ts`.
// Toutes les routes contenues dans `books.ts` seront préfixées par `/books`
// grâce à l'utilisation de `router.use()`.
// router.use("/books", booksRoutes);

export default router;