import mongoose from "mongoose";

const Schema = mongoose.Schema

let Breed = new Schema({
  id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'breeds' }],
  breed: String,
  origin: String,
  url: String,
  img: String,
  height: Object,
  weight: Object,
  coat: String,
})
  
export default mongoose.model("breeds", Breed)
