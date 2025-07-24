import { BookController } from "../controllers/BookController";
import { Router } from "express";

// Définition d'un routeur pour les routes liées aux livres
const router = Router();

// Route pour récupérer tous les livres
// Utilise la méthode `books` du `BookController`
// pour envoyer une réponse JSON contenant la liste des livres
router.get("/", (request, response) => {
  const bookController = new BookController(request, response);
  bookController.books();
});

// Route pour récupérer un livre par son ID
// Utilise la méthode `getById` du `BookController`
// pour envoyer une réponse JSON contenant les données du livre
// ou un message d'erreur si le livre n'est pas trouvé
router.get("/:id", (request, response) => {
  const bookController = new BookController(request, response);
  bookController.getById();
});

// Route pour créer un nouveau livre
// Utilise la méthode `create` du `BookController`
// pour traiter les données du livre envoyées dans le corps de la requête
// et envoyer une réponse JSON contenant les données du nouveau livre créé
// avec un ID généré automatiquement
router.post("/", (request, response) => {
  const bookController = new BookController(request, response);
  bookController.create();
});

export default router;