import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import "./goodAct.css";
import GoodActSVG from "./GoodActSVG";
import { usePageReset } from "../../../hooks/usePageReset";

const GoodAct = ({ setStoryActive }) => {
  const { pressedButtons, setPressedButtons, clickedSensors } = useSensorContext();
  const navigate = useNavigate();
  usePageReset({ setStoryActive });

  // Handle navigation to Challenge
  useEffect(() => {
    if (pressedButtons.includes("button_a_pressed")) {
      console.log("Navigating to Challenge from Good Act");
      navigate("/challenge");
      setPressedButtons([]); // Clear pressed buttons after navigation
    }
  }, [pressedButtons, navigate, setPressedButtons]);

  return (
    <div className="GoodAct-container">
      <GoodActSVG />
    </div>
  );
};

export default GoodAct;
