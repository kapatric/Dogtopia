import { Router } from "express";
import * as controllers from "../controllers/breeds.js";

const router = Router();

router.get("/", controllers.getBreeds)
router.get("/:id", controllers.getBreed)
router.get("/breed/:name", controllers.getBreedName)
router.post("/", controllers.createBreed)
router.put("/:id", controllers.updateBreed)
// router.put("/breed/:name", controllers.getBreed)
router.delete("/:id", controllers.deleteBreed)
// router.delete("/breed/:name", controllers.getBreed)

export default router;