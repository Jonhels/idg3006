import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function SensorDisplay() {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      //.get("http://localhost:4000/api/mikrobit")
      //.get("http://localhost:4000/api/mikrobit/search?eventType=button_a_pressed")
      //.get("http://localhost:4000/api/mikrobit/search?eventType=button_b_pressed")
      .get("http://localhost:4000/api/mikrobit/search?sensorType=light_level")
      .then((response) => {
        setSensorData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the sensor data!", error);
        setLoading(false);
      });
  }, []);

  console.log(sensorData);

  return (
    <div className="App">
      <p>Welcome to SensorDisplay component</p>
      <p>
        Here we will start by creating the render for sensor data and events
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        sensorData.map((item) => (
          <div key={item._id}>
            {" "}
            {/* Use _id as a unique key */}
            {item.type === "sensor" ? (
              <>
                <p>Type: {item.type}</p>
                <p>Sensor Type: {item.sensorType}</p>
                <p>Value: {item.value}</p>
                <p>Timestamp: {new Date(item.timestamp).toLocaleString()}</p>
              </>
            ) : (
              <>
                <p>Type: {item.type}</p>
                <p>Event Type: {item.eventType}</p>
                <p>Sensor ID: {item.sensorId}</p>
                <p>Timestamp: {new Date(item.timestamp).toLocaleString()}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default SensorDisplay;
