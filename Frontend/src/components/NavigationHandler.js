import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../context/SensorContext";

const NavigationHandler = ({ setStoryActive }) => {
  const navigate = useNavigate();
  const { combination, clickedSensors, setClickedSensors } = useSensorContext();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (!hasNavigated && combination?.length > 0) {
      console.log("Evaluating Combination:", combination);

      if (
        combination.includes("button_a_pressed") &&
        combination.includes("button_b_pressed")
      ) {
        console.log("Navigating to Rainforest");
        navigate("/rainforest");
        setStoryActive(true);
        setHasNavigated(true); // Prevent further navigation
      } else if (
        combination.includes("button_a_pressed") &&
        clickedSensors.includes("P2")
      ) {
        console.log("Navigating to Dessert");
        navigate("/dessert");
        setStoryActive(true);
        setHasNavigated(true); // Prevent further navigation
      } else if (
        combination.includes("button_b_pressed") &&
        clickedSensors.includes("P3")
      ) {
        console.log("Navigating to Antarctica");
        navigate("/cold");
        setStoryActive(true);
        setHasNavigated(true); // Prevent further navigation
      } else {
        console.log("No valid combination found.");
      }
    }
  }, [combination, clickedSensors, navigate, setStoryActive, hasNavigated]);

  useEffect(() => {
    if (clickedSensors.includes("P1")) {
      if (!combination?.length) {
        console.log("Reset triggered by P1 without a combination");
        navigate("/");
        setStoryActive(false);
      }

      // Clear P1 from clickedSensors and reset hasNavigated
      setClickedSensors((prev) => prev.filter((sensor) => sensor !== "P1"));
      setHasNavigated(false); // Allow new navigation
    }
  }, [clickedSensors, combination, navigate, setStoryActive, setClickedSensors]);

  return null; // No UI for this component
};

export default NavigationHandler;
