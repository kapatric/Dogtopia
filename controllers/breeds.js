import Breed from "../models/Breed.js"

export const getBreeds = async (req, res) => {
  try {
    const breeds = await getBreed.find();
    res.json(breeds)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const getBreed = async(req, res) => {
  try {
    const { id } = req.params;
    const breed = await Breed.findById(id)

    if (breed) {
      return res.json(breed)
    }
    res.status(400).json({ message: "Breed not Found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
}
}

export const createBreed = async (req, res) => {
  try {
    const breed = new Breed(req.body)
    await breed.save();
    res.status(201).json(breed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const updateBreed = async (req, res) => {
  try {
    const { id } = req.params
    const breed = await Breed.findByIdAndUpdate(id, req.body);
    res.status(201).json(breed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const deleteBreed = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Breed.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Breed deleted!")
    }
    throw new Error("Breed not found.")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}