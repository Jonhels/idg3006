import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Initialize socket outside the component to prevent multiple connections
const socket = io("http://localhost:4000");

function SensorDisplay({ onCombination, onPressedButtons, onClickedSensors, onStartButton }) { // Accept onStartButton as a prop
    const [sensorData, setSensorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pressedButtons, setPressedButtons] = useState([]);
    const [clickedSensors, setClickedSensors] = useState([]);

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
                console.error("Error fetching sensor data!", error);
                setLoading(false);
            });
    };

    const handleEvent = (event) => {
        const { type, eventType, sensorId } = event;

        if (type === "event") {
            // Handle button presses
            if (eventType === "button_a_pressed" || eventType === "button_b_pressed") {
                setPressedButtons((prev) => {
                    const updated = [...new Set([...prev, eventType])];
                    onPressedButtons?.(updated); // Notify parent via prop
                    return updated;
                });
            }

            // Handle Start/Reset button (e.g., P1)
            if (eventType === "click_detected" && sensorId === "P1") {
                onCombination?.([]); // Reset combinations if necessary
                onStartButton(sensorId); // Use onStartButton prop here
            }

            // Handle sensor clicks (P2, P3, etc.)
            if (eventType === "click_detected" && sensorId) {
                setClickedSensors((prev) => {
                    const updated = [...new Set([...prev, sensorId])];
                    onClickedSensors?.(updated); // Notify parent via prop
                    return updated;
                });
            }
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount

        // Listen for new sensor data via WebSocket
        socket.on("newMikrobitData", (newData) => {
            setSensorData((prevData) => [newData, ...prevData]); // Append new data
            handleEvent(newData); // Process events
        });

        // Cleanup WebSocket listener on component unmount
        return () => {
            socket.off("newMikrobitData");
        };
    }, []); // Run once on mount

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
