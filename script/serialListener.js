const { SerialPort } = require('serialport');  // Updated import for SerialPort
const { ReadlineParser } = require('@serialport/parser-readline');  // Correctly import ReadlineParser
const axios = require('axios');

// Serial port configuration
let port;
const portPath = process.env.PORT_PATH || "COM5";  // Use COM5 for Windows or adjust for Unix
const baudRate = process.env.BAUD_RATE || 115200;  // Default baud rate for Mikrobit
let parser;

const connectToSerialPort = () => {
  if (!portPath || portPath === 'undefined') {
    console.error('Error: Serial port path is not defined. Please check your configuration.');
    return;
  }

  console.log(`Attempting to open serial port: ${portPath}`);

  // Open the serial port
  port = new SerialPort({ path: portPath, baudRate }, (error) => {
    if (error) {
      console.error(`Error opening port: ${error.message}`);
      return;
    }
    console.log('Serial port opened');

    // Create a parser that will read data from the serial port
    parser = port.pipe(new ReadlineParser({ delimiter: '\n' })); // Use ReadlineParser

    // When the parser reads data, this event will be triggered
    parser.on('data', (line) => {
      try {
        // Parse the data as JSON
        const jsonData = JSON.parse(line);
        console.log(jsonData);

        // Post the data to the API
        postDataToAPI(jsonData);
      } catch (error) {
        console.error('Error parsing data:', error.message);
      }
    });

    // Handle serial port errors
    port.on('error', (error) => {
      console.error('Serial port error:', error.message);
    });

    // Detect if the port gets disconnected
    port.on('close', () => {
      console.warn('Serial port closed. Reconnecting...');
      attemptReconnect();
    });
  });
};

// Function to post data to our express API endpoint
const postDataToAPI = async (data) => {
  try {
    const response = await axios.post('http://127.0.0.1:4000/api/mikrobit', data);
    console.log('Data posted to endpoint', response.data);
  } catch (error) {
    console.error('Error posting data to endpoint', error.message);
  }
};

// Function to attempt to reconnect
const attemptReconnect = () => {
  const retryInterval = 5000;  // 5 seconds

  const tryConnect = () => {
    console.log(`Attempting to reconnect to ${portPath}...`);

    const tempPort = new SerialPort({ path: portPath, baudRate }, (error) => {
      if (error) {
        console.log(`Port not available. Retrying in ${retryInterval / 1000} seconds...`);
        setTimeout(tryConnect, retryInterval);
      } else {
        console.log('Reconnected to the serial port');
        tempPort.close(() => {
          connectToSerialPort();
        });
      }
    });
  };

  setTimeout(tryConnect, retryInterval);
};

// Call the function to connect to the serial port
connectToSerialPort();
