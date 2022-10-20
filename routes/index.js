import { application, Router } from 'express'
import Breed from '../models/Breed.js'
import breedsRoutes from "./breeds.js"


const router = Router()

router.get('/breeds/:id', (req, res) => {
  Breed.findById(req.params.id).then(breed => {
    res.json(breed)
  })
})

router.get("/breeds/breed/:breed", (req, res) => {
  Breed.find({ breeds: req.params.breed }).then(breeds => {
    res.json(breeds)
  })
})

router.use("/breeds", breedsRoutes)

export default router;