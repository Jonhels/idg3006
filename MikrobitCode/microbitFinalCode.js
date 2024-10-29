let crashSensorValueP1 = 0;   // Variable to store the sensor value for P1
let crashSensorValueP2 = 0;   // Variable to store the sensor value for P2
let crashSensorValueP3 = 0;   // Variable to store the sensor value for P3
let lightSensorValueP4 = 0;   // Variable to store the light sensor value for P4
let isPressedP1 = false;      // Flag to track if the sensor on P1 has been triggered
let isPressedP2 = false;      // Flag to track if the sensor on P2 has been triggered
let isPressedP3 = false;      // Flag to track if the sensor on P3 has been triggered
let isButtonPressedA = false; // Flag to track if the button on P5 has been pressed
let isButtonPressedB = false; // Flag to track if the button on P11 has been pressed

const THRESHOLD = 100;        // Threshold to determine when the click is detected
const LIGHT_REPORT_INTERVAL = 5000; // Interval to send light level (in milliseconds)
let lastLightReportTime = 0; // Timestamp for the last light level report

// Function to send a message when a click is detected
function sendClickDetected(sensorId: string) { 
    const clickEvent = {
        type: "event",
        eventType: "click_detected",
        sensorId: sensorId
    };
    serial.writeLine(JSON.stringify(clickEvent)); // Send JSON string of click event
}

// Function to send a button A pressed message
function sendButtonAPressed() {
    const buttonAEvent = {
        type: "event",
        eventType: "button_a_pressed"
    };
    serial.writeLine(JSON.stringify(buttonAEvent)); // Send JSON string for button A pressed
}

// Function to send a button B pressed message
function sendButtonBPressed() {
    const buttonBEvent = {
        type: "event",
        eventType: "button_b_pressed"
    };
    serial.writeLine(JSON.stringify(buttonBEvent)); // Send JSON string for button B pressed
}

// Function to send the light level
function sendLightLevel(value: number) {
    const lightEvent = {
        type: "sensor",
        sensorType: "light_level",
        value: value
    };
    serial.writeLine(JSON.stringify(lightEvent)); // Send JSON string of light level
}

// Main loop
basic.forever(function () {
    // Read the value from the crash sensors
    crashSensorValueP1 = pins.analogReadPin(AnalogPin.P1);
    crashSensorValueP2 = pins.analogReadPin(AnalogPin.P2);
    crashSensorValueP3 = pins.analogReadPin(AnalogPin.P3);
    lightSensorValueP4 = pins.analogReadPin(AnalogPin.P4); // Read from light sensor on P4

    // Check if the crash sensor on P1 is triggered
    if (crashSensorValueP1 < THRESHOLD) {
        if (!isPressedP1) {  // Only send if it was not already pressed
            sendClickDetected("P1");  // Send the click message for P1
            isPressedP1 = true;  // Set the flag to true to avoid multiple sends
        }
    } else {
        isPressedP1 = false;  // Reset the flag when the sensor is not pressed
    }

    // Check if the crash sensor on P2 is triggered
    if (crashSensorValueP2 < THRESHOLD) {
        if (!isPressedP2) {  // Only send if it was not already pressed
            sendClickDetected("P2");  // Send the click message for P2
            isPressedP2 = true;  // Set the flag to true to avoid multiple sends
        }
    } else {
        isPressedP2 = false;  // Reset the flag when the sensor is not pressed
    }

    // Check if the crash sensor on P3 is triggered
    if (crashSensorValueP3 < THRESHOLD) {
        if (!isPressedP3) {  // Only send if it was not already pressed
            sendClickDetected("P3");  // Send the click message for P3
            isPressedP3 = true;  // Set the flag to true to avoid multiple sends
        }
    } else {
        isPressedP3 = false;  // Reset the flag when the sensor is not pressed
    }

    // Check if the button on P5 is pressed
    if (pins.digitalReadPin(DigitalPin.P5) === 1) {  // Check if the button is pressed (assuming active high)
        if (!isButtonPressedA) {  // Only send if it was not already pressed
            sendButtonAPressed();  // Send the button A pressed message
            isButtonPressedA = true;  // Set the flag to true to avoid multiple sends
        }
    } else {
        isButtonPressedA = false;  // Reset the flag when the button is not pressed
    }

    // Check if the button on P11 is pressed
    if (pins.digitalReadPin(DigitalPin.P11) === 1) {  // Check if the button is pressed (assuming active high)
        if (!isButtonPressedB) {  // Only send if it was not already pressed
            sendButtonBPressed();  // Send the button B pressed message
            isButtonPressedB = true;  // Set the flag to true to avoid multiple sends
        }
    } else {
        isButtonPressedB = false;  // Reset the flag when the button is not pressed
    }

    // Send the light level every 5 seconds
    let currentTime = control.millis();
    if (currentTime - lastLightReportTime >= LIGHT_REPORT_INTERVAL) {
        sendLightLevel(lightSensorValueP4);  // Send the light level value
        lastLightReportTime = currentTime;  // Update the last report time
    }

    // Small pause to avoid flooding the output
    basic.pause(100);  // Adjust the pause as needed
});
