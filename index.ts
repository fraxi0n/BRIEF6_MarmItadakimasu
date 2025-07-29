import { logMiddleware } from './middlewares';
import { fileURLToPath } from 'node:url';
import Express from 'express';
import router from './routes/index';
import path from "node:path";

// Création d'une instance de l'application Express
// qui va gérer les requêtes HTTP entrantes
// et les rediriger vers les routes définies dans le routeur.
const app = Express();

// Définition du port sur lequel le serveur va écouter
// les requêtes HTTP. Ici, nous utilisons le port 3000.
const PORT = 3006;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Express.json() permet de convertir le
// corps de la requête au format JSON
app.use(Express.json());

app.use(Express.static(path.join(__dirname, "public")))


// Utilisation du routeur défini dans le fichier `routes/index.ts`
// qui contient toutes les routes de l'application
app.use(router);

// Démarrage du serveur sur le port défini
// et affichage d'un message dans la console
// pour indiquer que le serveur est en cours d'exécution
// et à quelle adresse il est accessible
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});