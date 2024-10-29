// Variables for sensors
let humidity = 0;
let temperature = 0;
let crashDetected = false;
let lastTemperature = -1;
let lastHumidity = -1;
let crashSensorPin = DigitalPin.P1;  // Pin for crash button (change to the correct pin)
let humiditySensorPin = AnalogPin.P2;  // Pin for humidity sensor (change to the correct pin)

// Function to send temperature data
function sendTemperatureData() {
    temperature = input.temperature();
    if (temperature != lastTemperature) {
        serial.writeLine(
            '{"type": "sensor", "sensorType": "temperature", "value": ' +
            temperature +
            "}"
        );
        lastTemperature = temperature;
    }
}

// Function to send humidity data
function sendHumidityData() {
    // Read the humidity value from the analog pin
    humidity = pins.analogReadPin(humiditySensorPin);
    if (humidity != lastHumidity) {
        serial.writeLine(
            '{"type": "sensor", "sensorType": "humidity", "value": ' +
            humidity +
            "}"
        );
        lastHumidity = humidity;
    }
}

// Function to check and send crash event data (button press)
function checkCrashSensor() {
    // Check the digital pin for the crash button
    crashDetected = pins.digitalReadPin(crashSensorPin) == 0;  // Assuming active-low button
    if (crashDetected) {
        serial.writeLine('{"type": "event", "eventType": "crash_detected"}');
    }
}

// Periodically check and send sensor data
basic.forever(function () {
    sendTemperatureData();
    sendHumidityData();
    checkCrashSensor();

    // Wait for 1 second before checking again
    basic.pause(5000);
});
