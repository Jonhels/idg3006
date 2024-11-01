import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function SensorDisplay() {
    const [sensorData, setSensorData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                "https://4000--main--idg3006--jonhels.code.alvinl.com/api/mikrobit",
            )
            .then((response) => {
                setSensorData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the sensor data!",
                    error,
                );
                setLoading(false);
            });
    }, []);

    console.log(sensorData);

    return (
        <div className="App">
            <p>Welcome to SensorDisplay component</p>
            <p>Here we will start by creating the render for sensordata</p>
            {loading ? (
                <p>Loading...</p>
            ) : (
                sensorData.map((sensor) => (
                    <div key={sensor.id}>
                        <p>{sensor.data}</p>
                        <p>{sensor._id}</p>
                        <p>{sensor.sensorType}</p>
                        <p>{sensor.value}</p>
                        <p>{sensor.timestamp}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default SensorDisplay;
