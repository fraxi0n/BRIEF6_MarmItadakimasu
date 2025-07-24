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