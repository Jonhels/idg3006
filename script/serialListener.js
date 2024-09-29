const SerialPort = require("serialport").SerialPort;
const Readline = require("@serialport/parser-readline");
const axios = require("axios");

// Serial port configuration
let port;
const portPath = process.env.PORT_PATH || "/dev/tty.usbmodem14201";
// Baud rate is the speed at which data is transferred in a communication channel
const baudRate = process.env.BAUD_RATE || 115200; // bits per second, 115200 is the default for Arduino
let parser;

const connectToSerialPort = () => {
  if (!portPath || portPath === "undefined") {
    console.error(
      "Error: Serial port path is not defined. Please check your configuration",
    );
    return;
  }

  // Open the serial port, this means we can start reading data from it
  port = new SerialPort(portPath, { baudRate }, (error) => {
    if (error) {
      console.error(`Error opening port: ${error.message}`);
      return;
    }
    console.log("Serial port opened");

    // Create a parser that will read data from the serial port, parser is a nice word for a function that reads data
    // port.pipe() is a function that takes the readable stream and sends it to the writable stream
    // delimiter: "\n" means that the parser will read until it finds a newline character
    parser = port.pipe(new Readline({ delimiter: "\n" }));
    // When the parser reads data, this event will be triggered
    parser.on("data", (line) => {
      try {
        // Parse the data as JSON
        const jsonData = JSON.parse(line);
        console.log(jsonData);

        // post the data to the API
        postDataToAPI(jsonData);
      } catch (error) {
        // Error.message is a property of the error object that contains a human-readable message
        console.error("Error parsing data:", error.message);
      }
    });

    // Handle serial port errors
    port.on("error", (error) => {
      console.error("Serial port error:", error.message);
    });

    // Detect if the port gets disconnected (eks. USB is unplugged)
    port.on("close", () => {
      console.warn("Serial port closed. Reconnecting...");
      attemptReconnect();
    });
  });
};

// Function to post data to our express API endpoint
const postDataToAPI = async (data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:4000/api/mikrobit",
      data,
    );
    console.log("Data posted to endpoint", response.data);
  } catch (error) {
    console.error("Error posting data to endpoint", error.message);
  }
};

// Function to attempt to reconnect
const attemptReconnect = () => {
  const retryInterval = 5000; // 5 seconds

  const tryConnect = () => {
    console.log(`Attempting to reconnect to ${portPath}...`);

    // Check if the serial port is available and try to reconnect
    const tempPort = new SerialPort(portPath, { baudRate }, (error) => {
      if (error) {
        console.log(
          `Port not available. Retrying in ${retryInterval / 1000} seconds...`,
        );
        setTimeout(tryConnect, retryInterval);
      } else {
        console.log("Reconnected to the serial port");
        tempPort.close(() => {
          connectToSerialPort();
        });
      }
    });
  };
  // Here we call setTimeout to call the function tryConnect after retryInterval
  setTimeout(tryConnect, retryInterval);
};

// Call the function to connect to the serial port
connectToSerialPort();
