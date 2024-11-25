import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../context/SensorContext";

const NavigationHandler = ({ setStoryActive }) => {
  const navigate = useNavigate();
  const {
    combination,
    setCombination,
    clickedSensors,
    setClickedSensors,
    pressedButtons,
    setPressedButtons,
  } = useSensorContext();
  const [hasNavigated, setHasNavigated] = useState(false);

  const resetStates = () => {
    console.log("Resetting all states...");
    setCombination([]);
    setPressedButtons([]);
    setClickedSensors([]);
    setHasNavigated(false);
  };

  // Handle Start Navigation Logic (P1 as Start Button)
  useEffect(() => {
    if (!hasNavigated && combination?.length > 0 && clickedSensors.includes("P1")) {
      console.log("Evaluating Combination:", combination);

      if (
        combination.includes("button_a_pressed") &&
        combination.includes("button_b_pressed")
      ) {
        console.log("Navigating to Rainforest");
        navigate("/rainforest");
        setStoryActive(true);
        setHasNavigated(true);
        resetStates();
      } else if (
        combination.includes("button_a_pressed") &&
        clickedSensors.includes("P2")
      ) {
        console.log("Navigating to Cold");
        navigate("/cold");
        setStoryActive(true);
        setHasNavigated(true);
        resetStates();
      } else if (
        combination.includes("button_b_pressed") &&
        clickedSensors.includes("P3")
      ) {
        console.log("Navigating to Dessert");
        navigate("/dessert");
        setStoryActive(true);
        setHasNavigated(true);
        resetStates();
      } else {
        console.warn("Invalid combination or navigation condition not met.");
      }

      // Clear P1 from clickedSensors after handling navigation
      setClickedSensors((prev) => prev.filter((sensor) => sensor !== "P1"));
    }
  }, [
    combination,
    clickedSensors,
    navigate,
    setStoryActive,
    hasNavigated,
    setCombination,
    setPressedButtons,
    setClickedSensors,
  ]);

  // Reset Logic for P1
  useEffect(() => {
    if (clickedSensors.includes("P1") && !combination?.length) {
      console.log("Reset triggered by P1");
      resetStates();
      navigate("/");
      setStoryActive(false);

      // Clear P1 from clickedSensors
      setClickedSensors((prev) => prev.filter((sensor) => sensor !== "P1"));
    }
  }, [clickedSensors, combination, navigate, setStoryActive, setClickedSensors]);

  // Rainforest Navigation Logic
  useEffect(() => {
    if (hasNavigated && pressedButtons.length > 0) {
      const lastButton = pressedButtons[pressedButtons.length - 1]; // Use the latest button press
      console.log("Rainforest Navigation: Evaluating button press");

      if (lastButton === "button_a_pressed") {
        console.log("Navigating to Illegal Act");
        navigate("/illegal-act");
        resetStates(); // Clear all states after navigation
      } else if (lastButton === "button_b_pressed") {
        console.log("Navigating to Good Act");
        navigate("/good-act");
        resetStates(); // Clear all states after navigation
      }
    }
  }, [hasNavigated, pressedButtons, navigate, setPressedButtons]);

  // Handle Illegal Act and Good Act Navigation to Challenge
  useEffect(() => {
    if (["/illegal-act", "/good-act"].includes(window.location.pathname)) {
      console.log("Waiting for A button to navigate to Challenge");

      if (pressedButtons.includes("button_a_pressed")) {
        console.log("Navigating to Challenge");
        navigate("/challenge");
        resetStates(); // Clear all states after handling
      }
    }
  }, [pressedButtons, navigate, setPressedButtons]);

  return null; // No UI for this component
};

export default NavigationHandler;
