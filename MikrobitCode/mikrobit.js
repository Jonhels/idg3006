// Event when button A is pressed
input.onButtonPressed(Button.A, function () {
  serial.writeLine('{"type": "event", "eventType": "button_a_pressed"}');
});
// Event when the Micro:bit is shaken
input.onGesture(Gesture.Shake, function () {
  serial.writeLine('{"type": "event", "eventType": "shaken"}');
  // Send light level data when shaken
  sendLightLevelData();
});
// Function to send temperature data
function sendTemperatureData() {
  // Get current temperature
  temperature = input.temperature();
  if (temperature != lastTemperature) {
    serial.writeLine(
      '{"type": "sensor", "sensorType": "temperature", "value": ' +
        temperature +
        "}",
    );
    // Update the stored value
    lastTemperature = temperature;
  }
}
// Event when button B is pressed
input.onButtonPressed(Button.B, function () {
  serial.writeLine('{"type": "event", "eventType": "button_b_pressed"}');
});
// Store the previous temperature
// Function to send light level data
function sendLightLevelData() {
  // Get current light level
  lightLevel = input.lightLevel();
  if (lightLevel != lastLightLevel) {
    serial.writeLine(
      '{"type": "sensor", "sensorType": "light_level", "value": ' +
        lightLevel +
        "}",
    );
    // Update the stored value
    lastLightLevel = lightLevel;
  }
}
let lightLevel = 0;
let temperature = 0;
let lastTemperature = 0;
let lastLightLevel = 0;
// Store the previous light level
lastLightLevel = -1;
// Store the previous temperature
lastTemperature = -1;
// Periodically check and send sensor data
basic.forever(function () {
  // Check and send light level data
  sendLightLevelData();
  // Check and send temperature data
  sendTemperatureData();
  // Wait for 1 second before checking again
  basic.pause(1000);
});
