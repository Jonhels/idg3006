import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Initialize socket outside the component to prevent multiple connections
const socket = io("http://localhost:4000");

function SensorDisplay({
  onCombination,
  onPressedButtons,
  onClickedSensors,
  onStartButton,
}) {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressedButtons, setPressedButtons] = useState([]);
  const [clickedSensors, setClickedSensors] = useState([]);

  const fetchData = () => {
    console.log("Fetching sensor data...");
    setLoading(true);
    axios
      .get("http://localhost:4000/api/mikrobit")
      .then((response) => {
        console.log("Sensor data fetched:", response.data);
        setSensorData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sensor data!", error);
        setLoading(false);
      });
  };

  const handleEvent = (event) => {
    const { type, eventType, sensorId } = event;

    console.log("Handling event:", event);

    if (type === "event") {
      if (
        eventType === "button_a_pressed" ||
        eventType === "button_b_pressed"
      ) {
        console.log("Button pressed:", eventType);
        setPressedButtons((prev) => {
          const updated = [...new Set([...prev, eventType])];
          console.log("Updated pressedButtons:", updated);
          return updated;
        });
      }

      if (eventType === "click_detected" && sensorId === "P1") {
        console.log("Start/Reset button clicked on", sensorId);
        setPressedButtons((prevPressedButtons) => {
          const updatedCombination = [...prevPressedButtons]; // Copy the current state
          console.log("Combination sent to parent:", updatedCombination);
          onCombination?.(updatedCombination); // Pass the updated state
          return []; // Reset the pressed buttons after handling
        });

        if (onStartButton) {
          onStartButton(sensorId);
        }
      }

      if (eventType === "click_detected" && sensorId) {
        console.log("Sensor clicked:", sensorId);
        setClickedSensors((prev) => [...new Set([...prev, sensorId])]);
      }
    }
  };

  useEffect(() => {
    fetchData();

    socket.on("newMikrobitData", (newData) => {
      console.log("New data received via WebSocket:", newData);
      setSensorData((prevData) => [newData, ...prevData]);
      handleEvent(newData);
    });

    return () => {
      socket.off("newMikrobitData");
    };
  }, []);

  useEffect(() => {
    if (onPressedButtons) {
      onPressedButtons(pressedButtons);
    }
  }, [pressedButtons, onPressedButtons]);

  return (
    <div className="Sensor">
      <p>Welcome to SensorDisplay component</p>
      <p>Here we will render the sensor data and events.</p>

      <div>
        <p>
          <strong>Pressed Buttons:</strong> {pressedButtons.join(", ")}
        </p>
        <p>
          <strong>Clicked Sensors:</strong> {clickedSensors.join(", ")}
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
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
                  {item.sensorId && <p>Sensor ID: {item.sensorId}</p>}
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
