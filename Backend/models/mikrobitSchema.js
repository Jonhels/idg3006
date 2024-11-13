const mongoose = require("mongoose");

const mikrobitSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["sensor", "event"], // Only allow 'sensor' or 'event'
    required: true,
  },
  sensorType: {
    type: String,
    enum: ["light_level"], // Only allow 'light_level' for sensor type
    required: function () {
      return this.type === "sensor"; // Only required if type is 'sensor'
    },
  },
  eventType: {
    type: String,
    enum: ["button_a_pressed", "button_b_pressed", "click_detected"], // Only allow specific event types
    required: function () {
      return this.type === "event"; // Only required if the type is 'event'
    },
  },
  value: {
    type: Number,
    required: function () {
      return this.type === "sensor"; // Only required if the type is 'sensor'
    },
  },
  sensorId: {
    type: String,
    required: function () {
      return this.type === "event" && this.eventType === "click_detected"; // Only required for click events
    },
  },
  // Additional fields can be added here in the future
  timestamp: {
    type: Date,
    default: Date.now, // Automatically set to the current date/time
  },
});

// Create the Mongoose model
const Mikrobit = mongoose.model("Mikrobit", mikrobitSchema);
module.exports = Mikrobit;
