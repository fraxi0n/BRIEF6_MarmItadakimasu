# 02 - Express _(controllers)_

- **Date du cours :** 24 juillet 2025
- **Objectifs :** Approfondissement de l'utilisation du framework Express, en instaurant des contrôleurs pour séparer la logique métier.

## Installation et exécution du code

1. Clonez le repository sur votre machine locale
2. Installez les dépendances avec la commande `npm install`
3. Exécutez le code avec la commande `npm run dev` _(script défini dans le fichier `package.json`)_

## Résumé du cours

### Bases d'Express

Ce matin, nous avons repris les bases d'Express, à savoir :

- La création d'un serveur Express
- La définition de routes _(méthodes HTTP, endpoints et fonctions de rappel)_
- Le lancement d'un serveur Express avec un port
- L'envoi de réponses HTTP avec des données au format JSON _(`response.json()`)_ ou HTML/textuelles _(`response.send()`)_

Nous avons ensuite abordé de nouvelles notions, comme :

- Les **middlewares**
- Les **routeurs**
- Les **contrôleurs** _(issus du design pattern **MVC**, **Model View Controller**)_

### Middlewares

Les middlewares sont des fonctions qui s'exécutent entre la réception d'une requête et l'envoi d'une réponse.

Ces fonctions peuvent être utilisées pour effectuer des tâches telles que :

- La journalisation des requêtes
- La validation des données
- La gestion des erreurs
- L'authentification des utilisateurs

Nous avons créé un [middleware de journalisation](./middlewares.ts) qui affiche un message dans la console à chaque fois qu'une requête est reçue.

```ts
import type { Request, Response, NextFunction } from "express";

export const logMiddleware = (
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  console.log("Une requête vient d'entrer !");
  next(); // Appel de la fonction next pour passer au middleware suivant
};
```

Son enregistrement dans l'application se fait dans le fichier racine `index.ts` :

```ts
import { logMiddleware } from "./middlewares";
import Express from "express";

const app = Express();
app.use(logMiddleware); // Enregistrement du middleware de journalisation
```

### Routeurs

Au début, toutes les routes étaient présentes dans le fichier `index.ts` qui est présent à la racine du projet.  
Pour des raisons de lisibilité et maintenabilité, elles ont été déplacées dans un répertoires `routes` et dans des fichiers distincts.

En séparant les routes du fichiers principal, il a été nécessaire d'utiliser la fonction `Router` d'Express pour pouvoir **instancier un routeur**.

```ts
import { Router } from "express";

const router = Router();
```

À partir de l'objet `router`, on a ensuite pu déclarer les routes de notre application de la même manière qu'auparavant.

```ts
router.get("/", (request, response) => {
  response.send("<h1>Ma page d'accueil</h1>");
});
```

On a également profité de la puissance du routeur d'Express pour mettre en place **un fichier de routes par ressource**.
C'est notamment ce qu'on a fait avec les routes des livres dans le fichier [`./books.ts`](./routes/books.ts).

Une fois les routes des livres déclarées et son routeur exporté, nous l'avons enregistré dans le [routeur principal](./routes/index.ts) avec `router.use("/books", booksRoutes);`.
Le premier argument de la méthode `use` est le **préfixe** des routes, ici `/books`, et le second argument est le routeur que nous avons créé pour les livres.

```ts
import booksRoutes from "./books";
import { Router } from "express";

const router = Router();
router.use("/books", booksRoutes);
```

De cette manière, toutes les routes définies dans le fichier `books.ts` seront accessibles via le préfixe `/books`, par exemple :

- `GET /books` pour récupérer tous les livres
- `GET /books/:id` pour récupérer un livre par son ID
- `POST /books` pour créer un nouveau livre

Pour finir, nous avons exporté le routeur principal pour l'enregistrer dans le [fichier racine](./index.ts) de notre application.

### Contrôleurs

Les contrôleurs sont des éléments d'une application qui gèrent la logique métier et les interactions avec les données.

Au sein de notre application, nous avons créé deux contrôleurs :

- Le [contrôleur de la page d'accueil](./controllers/HomeController.ts) : il gère la logique de la page d'accueil, comme l'envoi d'une réponse HTML avec un message de bienvenue.
- Le [contrôleur des livres](./controllers/BookController.ts) : il gère les opérations liées aux livres, comme la récupération de tous les livres, la création d'un nouveau livre, etc.

Pour chaque contrôleur, nous avons créé une classe qui hérite de la classe abstraite `Controller` définie dans le fichier [`./libs/Controller.ts`](./libs/Controller.ts).
Cette classe abstraite contient les propriétés `request` et `response` qui sont utilisées pour accéder à la requête et à la réponse dans les méthodes des contrôleurs.

```ts
import type { Request, Response } from "express";

export abstract class Controller {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
}
```

Chaque contrôleur hérite de cette classe et utilise les propriétés `request` et `response` pour gérer les requêtes et les réponses.
Les méthodes des contrôleurs sont ensuite appelées dans les routes correspondantes, comme dans le fichier [`books.ts`](./routes/books.ts) :

```ts
import { BookController } from "../controllers/BookController";
import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  const bookController = new BookController(request, response);
  bookController.books();
});

router.get("/:id", (request, response) => {
  const bookController = new BookController(request, response);
  bookController.getById();
});

router.post("/", (request, response) => {
  const bookController = new BookController(request, response);
  bookController.create();
});

export default router;
```
