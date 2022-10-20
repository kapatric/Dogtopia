import { Router } from "express";
import * as controllers from "../controllers/breeds.js";

const router = Router();

router.get("/", controllers.getBreeds)
router.get("/:id", controllers.getBreed)
router.post("/", controllers.createBreed)
router.put("/:id", controllers.updateBreed)
router.delete("/:id", controllers.deleteBreed)

export default router;