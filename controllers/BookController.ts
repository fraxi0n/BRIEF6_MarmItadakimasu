import { Controller } from "../libs/Controller";

// Définition d'un tableau de données,
// contenant les livres par défaut
// de l'application
const books = [
  { id: 1, title: "1984" },
  { id: 2, title: "Le Meilleur des mondes" },
  { id: 3, title: "Fahrenheit 451" },
];

// Définition d'un contrôleur "BookController",
// qui hérite de la classe abstraite "Controller"
export class BookController extends Controller {
  // Méthode de la classe "BookController",
  // en charge de l'envoi de la réponse contenant
  // un JSON représentant les livres de l'application
  public books() {
    this.response.render("pages/books", { books });
  }

  // Méthode de la classe "BookController",
  // en charge de l'envoi de la réponse contenant
  // un JSON représentant un livre récupéré par son ID.
  public getById() {
    // On récupère l'ID du livre à partir des paramètres
    // de l'URL de la requête (/books/:id) puis
    // on convertit cet ID en nombre entier
    // avec parseInt()
    const bookId = parseInt(this.request.params.id);

    // On cherche le livre dans le tableau `books`
    // en utilisant la méthode `find()`
    // qui permet de trouver le premier élément
    // du tableau qui correspond à la condition
    // définie dans la fonction de rappel
    // (callback) passée en paramètre
    const book = books.find((book) => {
      // On compare l'ID du livre avec l'ID
      // récupéré dans les paramètres de la requête
      return book.id === bookId;
    });

    /**
     * 
    public books() {
      this.response.render("pages/books", { books });
    }

    Deuxième argument permet de passer des variables à la vue (EJS).
    Sous forme d'objet :
    {
      book: { title: "Mon titre" }
    }
     */

    // Si le livre est trouvé, on envoie
    // une réponse JSON avec les données du livre
    if (book) {
      this.response.render("pages/book", { book });
      return;
    }

    // Si le livre n'est pas trouvé, on envoie
    // une réponse JSON avec un message d'erreur
    // et un code de statut HTTP 404 (Not Found)
    // pour indiquer que la ressource demandée
    // n'existe pas
    this.response.status(404).render("_errors/404.ejs", { error: "Book not found" });
  }

  // Méthode de la classe "BookController",
  // en charge de la création d'un nouveau livre
  // à partir des données envoyées dans le corps
  // de la requête (request body)
  // et de l'envoi d'une réponse JSON contenant
  // les données du nouveau livre créé
  // avec un ID généré automatiquement
  public create() {
    // On récupère le titre du livre à partir
    // du corps de la requête (request body)
    const title: string = this.request.body.title;

    // On génère un ID unique pour le nouveau livre
    // en utilisant la date actuelle (timestamp)
    // comme identifiant, ce qui garantit que
    // chaque livre aura un ID unique basé sur le moment
    // de sa création
    const id = Date.now();

    // On prépare un nouvel objet pour le livre
    // avec l'ID généré et le titre récupéré
    // du corps de la requête
    const newBook = { id, title };

    // On ajoute le nouveau livre au tableau `books`
    // pour le stocker dans la mémoire de l'application
    books.push(newBook);

    // On envoie une réponse JSON contenant
    // les données du nouveau livre créé
    // pour informer le client que l'opération
    // a réussi et que le livre a été ajouté
    this.response.json(newBook);
  }
}
