const { SerialPort } = require('serialport');

// To list available serial ports
SerialPort.list()
  .then((ports) => {
    ports.forEach((port) => {
      console.log(`Port: ${port.path}`);
    });
  })
  .catch((err) => {
    console.error('Error listing ports:', err.message);
  });
