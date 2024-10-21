# idg3006

Project for the class IDG3006. This project is a MERN stack project, consisting of all we need to post data from the mikrobit to the database. In the frontend we fetch the data and use it for our application. 

Collect -> Send -> store -> recive is the main functionalities in this repo. Inside Script folder we have the script that listens for json data on the serial port and posts it to our express endpoint.


Notes for filtering:


Endpoints:

// Initial
GET /

// Create new data object
POST /api/mikrobit

// Get all
GET /api/mikrobit

// Eventtype
GET /api/mikrobit/search?eventType=button_a_pressed
GET /api/mikrobit/search?eventType=button_b_pressed
GET /api/mikrobit/search?eventType=shaken

// Sensortype
GET /api/mikrobit/search?sensorType=light_level
GET /api/mikrobit/search?sensorType=temperature&eventType=shaken
GET /api/mikrobit/search?sensorType=light_level
GET /api/mikrobit/search?sensorType=temperature

// Test