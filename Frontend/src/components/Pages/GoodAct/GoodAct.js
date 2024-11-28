import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import "./goodAct.css";
import GoodActSVG from "./GoodActSVG";
import { usePageReset } from "../../../hooks/usePageReset";

const GoodAct = ({ setStoryActive }) => {
  const { clickedSensor, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to challenge from DestroyedForest");
            navigate("/Challenge");
            setPressedButtons([]);
        } else if (pressedButtons.includes("button_b_pressed")) {
            console.log("Navigating to wildfire from Good-act");
            navigate("/Challenge");
            setPressedButtons([]);
        }
    }, [pressedButtons, navigate, setPressedButtons]);

  return (
    <div className="GoodAct-container">
      <GoodActSVG />
    </div>
  );
};

export default GoodAct;
