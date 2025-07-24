import { Router } from "express";

// CRUD -> BREAD
// - Browse
// - Read
// - Edit
// - Add
// - Delete

const router = Router();

// Browse
router.get("/", function () {});

// Read
router.get("/:id", function () {});

// Edit
router.put("/:id", function () {});

// Add
router.post("/", function () {});

// Delete
router.delete("/:id", function () {});

export default router;