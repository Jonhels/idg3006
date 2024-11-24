import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:4000");


export const useSensorEvents = () => {
  const [pressedButtons, setPressedButtons] = useState([]);
  const [clickedSensors, setClickedSensors] = useState([]);
  const [lightLevel, setLightLevel] = useState(null);
  const [combination, setCombination] = useState(null);

  useEffect(() => {
    const handleEvent = (event) => {
      const { type, eventType, sensorId, value, sensorType } = event;

      if (type === "event") {
        // Handle button press events
        if (eventType === "button_a_pressed" || eventType === "button_b_pressed") {
          setPressedButtons((pressedButtons) => [...new Set([...pressedButtons, eventType])]); // Ensure unique buttons
          console.log("Pressed Buttons Updated:", [...new Set([...pressedButtons, eventType])]);
        }

        // Handle sensor clicks
        if (eventType === "click_detected" && sensorId) {
          setClickedSensors((clickedSensors) => [...new Set([...clickedSensors, sensorId])]);
          console.log("Clicked Sensors Updated:", [...new Set([...clickedSensors, sensorId])]);

          // Trigger combination evaluation when P1 is clicked
          if (sensorId === "P1") {
            setCombination([...pressedButtons]); // Use current pressed buttons for combination
            setPressedButtons([]); // Reset buttons after processing
            console.log("Combination Set:", [...pressedButtons]);
          }
        }
      }

      // Handle light level updates
      if (type === "sensor" && sensorType === "light_level") {
        setLightLevel(value);
        console.log("Light Level Updated:", value);
      }
    };

    socket.on("newMikrobitData", (data) => handleEvent(data));

    return () => {
      socket.off("newMikrobitData");
    };
  }, [pressedButtons]);

  return { pressedButtons, setPressedButtons, clickedSensors, setClickedSensors, lightLevel, combination };
};
