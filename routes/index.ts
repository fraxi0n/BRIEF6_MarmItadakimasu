import { Router } from "express";
import recipesRouter from "./recipes";
import categoriesRouter from "./categories";
import genericRouter from "./generic";

const router = Router();

router.use(genericRouter)
router.use(recipesRouter)
router.use(categoriesRouter)

export default router;