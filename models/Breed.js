import mongoose from "mongoose";

const Schema = mongoose.Schema

let Breed = new Schema({
  breed: String,
  origin: String,
  url: String,
  img: String,
  height: Object,
  weight: Object,
  coat: String,
})
  
export default mongoose.model("breeds", Breed)
