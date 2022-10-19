import { Router } from 'express'
import breedsRoutes from "./breeds.js"


const router = Router()

router.get("/", (req,res) => res.send("This is the api root"))

router.use("breeds", breedsRoutes)

export default router;