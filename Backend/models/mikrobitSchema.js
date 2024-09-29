const mongoose = require("mongoose");

const mikrobitSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["sensor", "event"], // Only allow 'sensor' or 'event'
    required: true,
  },
  sensorType: {
    type: String,
    enum: ["light_level", "temperature"], // Only allow 'light_level' or 'temperature'
    required: function () {
      return this.type === "sensor"; // Only required if type is 'sensor'
    },
  },
  eventType: {
    type: String,
    enum: ["button_a_pressed", "button_b_pressed", "shaken"], // Only allow 'button_a_pressed', 'button_b_pressed' or 'shaken'
    required: function () {
      return this.type === "event"; // Only required if the type is 'event'
    },
  },
  // More here if we need to add more fields in the future
});

const Mikrobit = mongoose.model("Mikrobit", mikrobitSchema);
module.exports = Mikrobit;
