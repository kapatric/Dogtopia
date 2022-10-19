import mongoose from "../db/connection.js";
import Breed from "../models/Breed.js";
import breeds from "./breeds.json" assert {type: "json"}


const breedData = breeds.map(item => {
  const breed = {}
  breed.breed = item.breed
  breed.origin = item.origin
  breed.url = item.url
  breed.img = item.img
  breed.height = item.meta.height
  breed.weight = item.meta.weight
  breed.coat = item.meta.coat
  return breed
})



Breed
  .deleteMany({})
  .then(() => Breed.create(breedData))
  .then(() => console.log("Breed seeded!"))
  .then(() => mongoose.close())
  .catch(error => console.error('Error', error))


