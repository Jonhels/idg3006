import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import "./rainforest.css";
import { usePageReset } from "../../../hooks/usePageReset";
// Optional imports (uncomment if needed)
// import BirdBlue from "./BirdBlue";
// import Forestview from "./BackgroundForest";
// import Bush1 from "./Bush";

import RainforestSVG from "./RainforestSVG";
// import BurningForestSVG from "./BurningForest";

const Rainforest = ({ setStoryActive }) => {
  const { clickedSensors, pressedButtons, setPressedButtons } = useSensorContext();
  const navigate = useNavigate();

  // Handle Reset (P1 button)
  usePageReset({ setStoryActive });
  // Handle navigation based on button press (A or B)
  useEffect(() => {
    if (pressedButtons.includes("button_a_pressed")) {
      console.log("Navigating to Illegal Act from Rainforest");
      navigate("/illegal-act");
      setPressedButtons([]); // Clear pressed buttons after navigation
    } else if (pressedButtons.includes("button_b_pressed")) {
      console.log("Navigating to Good Act from Rainforest");
      navigate("/good-act");
      setPressedButtons([]); // Clear pressed buttons after navigation
    }
  }, [pressedButtons, navigate, setPressedButtons]);

  return (
    <div className="rainforest">
      {/* Example content; uncomment or modify as needed */}
      {/* <h2>Welcome to the rainforest</h2> */}
      {/* <Forestview /> */}
      {/* <BirdBlue /> */}
      {/* <Bush1 /> */}
      <RainforestSVG />
      {/* <BurningForestSVG /> */}
    </div>
  );
};

export default Rainforest;
