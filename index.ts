import { logMiddleware } from './middlewares';
import Express from 'express';
import router from './routes';

const app = Express();
const PORT = 3000;

// Express.json() permet de convertir le corps de la requête
// au format JSON
app.use(Express.json());

// Définition d'un middleware maison, qui vient
// afficher un message dans la console à chaque
// fois qu'une requête entre sur le serveur
app.use(logMiddleware);

// app.use((request, response, next) => {
//   if (request.body.age >= 18) {
//     next();
//     return;
//   }

//   response.send("Vous devez être majeur");
// });

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});