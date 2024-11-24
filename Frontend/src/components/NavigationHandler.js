import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigationHandler = ({
  storyActive,
  setStoryActive,
  pendingPage,
  setPendingPage,
  isLocked,
  setIsLocked,
  setPressedButtons,
  setClickedSensors, // Ensure this prop is passed from the parent component
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the pending page if one exists and the app is not locked
    if (pendingPage && !isLocked) {
      console.log("Navigating to:", pendingPage);
      setIsLocked(true); // Lock the app to prevent further changes
      setStoryActive(true); // Activate the story mode
      navigate(`/${pendingPage}`); // Navigate to the pending page
      setPendingPage(null); // Clear the pending page
    }
  }, [
    pendingPage,
    isLocked,
    navigate,
    setIsLocked,
    setStoryActive,
    setPendingPage,
  ]);

  const handleReset = () => {
    console.log("Resetting navigation...");
    setStoryActive(false); // End the story
    setIsLocked(false); // Unlock the app
    setPendingPage(null); // Clear pending navigation
    setPressedButtons([]); // Reset pressed button states
    setClickedSensors([]); // Clear clicked sensors state
    navigate("/"); // Navigate back to the home page
  };

  return (
    <button onClick={handleReset}>
      {storyActive || isLocked ? "Reset" : "Start"}
    </button>
  );
};

export default NavigationHandler;
