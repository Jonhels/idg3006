const SerialPort = require("serialport").SerialPort;
const Readline = require("@serialport/parser-readline");

const axios = require("axios");

// Serial port configuration, right now it's hardcoded to /dev/ttyACM0
// const portPath = process.env.SERIAL_PORT || "/dev/ttyACM0";
const port = new SerialPort("/dev/ttyACM0", { baudRate: 115200 });

// Use a parser to read incoming data from port line by line
const parser = port.pipe(new Readline({ delimiter: "\n" }));

// Function to post data to the express API
const postDataToAPI = async (data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:4000/api/mikrobit",
      data,
    );
    console.log("Data successfully posted", response.data);
  } catch (error) {
    console.error("Error posting data:", error.message);
  }
};

// Listen for incoming data from the serial port
parser.on("data", (line) => {
  try {
    // Parse the incoming JSON string
    const jsonData = JSON.parse(line);
    console.log("Recived data from Micro:bit", jsonData);

    // Post the data to the express API
    postDataToAPI(jsonData);
  } catch (error) {
    console.error("Error parsing data:", error.message);
  }
});

// Handle serial port errors
port.on("error", (err) => {
  console.error("Serial Port Error:", err.message);
});
