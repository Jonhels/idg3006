const Mikrobit = require("../models/mikrobitSchema");

const mikrobitController = async (req, res) => {
  try {
    // Get the information from the request body
    const { type, sensorType, eventType, timestamp, value } = req.body;
    // Create a new Mikrobit object, with the information from the request
    const newMikrobit = new Mikrobit({
      type,
      sensorType,
      eventType,
      timestamp,
      value,
    });

    // Save the information to the database
    await newMikrobit.save();

    // Send a response to the client
    res.status(201).json({
      message: "Mikrobit data created successfully",
      data: newMikrobit,
    });
  } catch (error) {
    // If there is an error, send a response to the client
    res.status(400).json({ message: error.message });
  }
};

// Get all mikrobit data from the database (both sensor and events)
const getAllMikrobits = async (req, res) => {
  try {
    // Fetch all the mikrobit data from the database
    const mikrobits = await Mikrobit.find();
    res.status(200).json(mikrobits);
  } catch (error) {
    // If there is an error, send a response to the client
    res.status(500).json({ message: "Failed to get Mikrobit data" });
  }
};

// Sort on sensorType and timestamp
const getFilteredData = async (req, res) => {
  try {

    // Extract sensorType from the request
    const { sensorType, eventType} = req.query;

    // Query the database for the sensor, this will be used to filter the data
    const query = {};
    // If sensorType is provided, add it to the query
    if (sensorType) {
      query.sensorType = sensorType;
    }
    // If eventType is provided, add it to the query
    if (eventType) {
      query.eventType = eventType;
    }

    // Fetch the sensor data from the database, sorted by timestamp
    const filteredData = await Mikrobit.find(query).sort({timestamp: 1});
    
    // Return sorted data
    res.status(200).json(filteredData)
  } catch (error) {
    // If error, send response to client
    res.status(500).json({message: "Failed to get filtered data", error: error.message});
  }
}

// Sort on eventType and timestamp

module.exports = { mikrobitController, getAllMikrobits, getFilteredData };
