import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Initialize socket outside the component to prevent multiple connections
const socket = io("http://localhost:4000");

function SensorDisplay() {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/api/mikrobit")
      .then((response) => {
        setSensorData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the sensor data!", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount

    // Listen for new sensor data
    socket.on("newMikrobitData", (newData) => {
      setSensorData((prevData) => [newData, ...prevData]);
    });

    // Cleanup the event listener on component unmount
    return () => {
      socket.off("newMikrobitData"); // Stop listening to the event
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="Sensor">
      <p>Welcome to SensorDisplay component</p>
      <p>
        Here we will start by creating the render for sensor data and events
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ maxHeight: "60vh", overflowY: "auto" }}> {/* Wrapper for scrolling */}
          {sensorData.map((item) => (
            <div key={item._id}>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default SensorDisplay;
