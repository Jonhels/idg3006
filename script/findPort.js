const { SerialPort } = require('serialport');

// To list available serial ports
SerialPort.list()
  .then((ports) => {
    ports.forEach((port) => {
      console.log(`Port: ${port.path}`);
      console.log(`  Manufacturer: ${port.manufacturer}`);
      console.log(`  Serial Number: ${port.serialNumber}`);
      console.log(`  PNP ID: ${port.pnpId}`);
      console.log(`  Location ID: ${port.locationId}`);
      console.log(`  Vendor ID: ${port.vendorId}`);
      console.log(`  Product ID: ${port.productId}`);
    });
  })
  .catch((err) => {
    console.error('Error listing ports:', err.message);
  });
