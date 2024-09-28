const Mikrobit = require("../models/mikrobitSchema");

const mikrobitController = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newMikrobit = new Mikrobit({ name, email, age });
    await newMikrobit.save();
    res
      .status(201)
      .json({ message: "Mikrobit created successfully", Mikrobit });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all mikrobits
const getAllMikrobits = async (req, res) => {
  try {
    const mikrobits = await Mikrobit.find();
    res.status(200).json(mikrobits);
  } catch (error) {
    res.status(500).json({ message: "Failed to get Mikrobits" });
  }
};

module.exports = { mikrobitController, getAllMikrobits };
