import IllegalSVG from "./IllegalSVG";
import "./Act.css";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import { usePageReset } from "../../../hooks/usePageReset";

const IllegalComponent = ({ setStoryActive }) => {
  const { clickedSensors, pressedButtons, setPressedButtons } = useSensorContext();
  const navigate = useNavigate();

  // Handle Reset (P1 button)
  usePageReset({ setStoryActive });
  // Handle navigation based on button press (A or B)
  useEffect(() => {
    if (pressedButtons.includes("button_a_pressed")) {
      console.log("Navigating to Illegal Act from Rainforest");
      navigate("/Challenge");
      setPressedButtons([]); // Clear pressed buttons after navigation
    }
  }, [pressedButtons, navigate, setPressedButtons]);


  return (
    <div>
      <IllegalSVG />
    </div>
  );
};

export default IllegalComponent;
