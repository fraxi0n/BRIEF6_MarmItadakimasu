import { fileURLToPath } from 'node:url';
import Express from 'express';
import router from './routes/index';
import path from "node:path";


const app = Express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(Express.json());

app.use(Express.static(path.join(__dirname, "public")))


app.use(router);

export default app;