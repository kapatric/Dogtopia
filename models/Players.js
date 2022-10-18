import mongoose from "mongoose";

const Schema = mongoose.Schema

let Player = new Schema({
  Name: String,
  id: String,
})
  
export default mongoose.model("players", Player)
