import type { Request, Response, NextFunction } from "express";

// Middleware pour logger les requêtes entrantes
// Il affiche un message dans la console à chaque fois qu'une requête est reçue
export const logMiddleware = (_request: Request, _response: Response, next: NextFunction) => {
  console.log("Une requête vient d'entrer !");

  // next() permet de sortir du middleware, et de 
  // passer à la suite du programme (autres callbacks,
  // comme ceux des routes)
  next();
};