// Variables for sensors
let lightLevel = 0;
let lastLightLevel = -1;
let crashState = [0, 0, 0, 0, 0];  // Array to hold the current state of five crash sensors
let lastCrashState = [0, 0, 0, 0, 0];  // Array to hold the previous state of five crash sensors
let crashSensorPins = [DigitalPin.P1, DigitalPin.P3, DigitalPin.P4, DigitalPin.P5, DigitalPin.P6];  // Pins for crash sensors
let lightSensorPin = AnalogPin.P7;  // Pin for light sensor

// Function to send light sensor data
function sendLightData() {
    lightLevel = pins.analogReadPin(lightSensorPin);
    if (lightLevel != lastLightLevel) {
        serial.writeLine(
            '{"type": "sensor", "sensorType": "light", "value": ' +
            lightLevel +
            "}"
        );
        lastLightLevel = lightLevel;
    }
}

// Function to check and send crash sensor data only if it changes (1 for pressed, 0 for not pressed)
function checkCrashSensors() {
    for (let i = 0; i < crashSensorPins.length; i++) {
        // Read the state of each crash sensor (handle disconnected sensor as 0)
        try {
            crashState[i] = pins.digitalReadPin(crashSensorPins[i]) == 0 ? 1 : 0;  // Active-low logic (1 = pressed, 0 = not pressed)
        } catch (e) {
            crashState[i] = 0;  // If sensor is disconnected, treat as unpressed (0)
        }

        // Only send the state if it has changed
        if (crashState[i] != lastCrashState[i]) {
            serial.writeLine(
                '{"type": "sensor", "sensorType": "crash_sensor", "sensorId": ' +
                i +
                ', "value": ' +
                crashState[i] +
                "}"
            );
            lastCrashState[i] = crashState[i];  // Update the last known state
        }
    }
}

// Periodically check and send sensor data
basic.forever(function () {
    sendLightData();
    checkCrashSensors();

    // Wait for 1 second before checking again
    basic.pause(5000);
});
