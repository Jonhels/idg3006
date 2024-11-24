import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../context/SensorContext";
import "./rainforest.css";
import RainforestSVG from "./RainforestSVG";
import BurningForestSVG from "./BurningForest";


const Rainforest = ({ setStoryActive }) => {
  const { clickedSensors } = useSensorContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedSensors.includes("P1")) {
      console.log("Reset triggered in Rainforest");
      setStoryActive(false);
      navigate("/");
    }
  }, [clickedSensors, navigate, setStoryActive]);

  return (
    <div className="rainforest">
      {/* Main Content */}
      <RainforestSVG />
      <BurningForestSVG />
    </div>
  );
};

export default Rainforest;
