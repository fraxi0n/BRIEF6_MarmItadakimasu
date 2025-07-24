import { Controller } from "../libs/Controller";

const books = [
  { id: 1, title: "1984" },
  { id: 2, title: "Le Meilleur des mondes" },
  { id: 3, title: "Fahrenheit 451" },
];

export class BookController extends Controller {
  public books() {
    this.response.json(books);
  }

  // TODO
  // 1. Récupérer un livre par son ID
  public getById() {
    const bookId = parseInt(this.request.params.id);

    const book = books.find((book) => {
      return book.id === bookId;
    });

    if (book) {
      this.response.json(book);
      return;
    }

    this.response.status(404).json({ error: "Book not found" });
  }

  // 2. Ajouter un livre dans le tableau `books`
  public create() {
    const title: string = this.request.body.title;
    const id = Date.now();

    const newBook = { id, title };

    books.push(newBook);

    this.response.json(newBook);
  }
}
