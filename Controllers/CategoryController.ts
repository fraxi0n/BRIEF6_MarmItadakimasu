import { Controller } from "../libs/Controller";

export class CategoryController extends Controller {

  public category() {
    this.response.render("pages/category");
  }
}
