import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./rainforest.css";
import RainforestSVG from "./RainforestSVG";
import BurningForestSVG from "./BurningForest";

const Rainforest = ({
  storyActive,
  setStoryActive,
  pressedButtons,
  clickedSensors,
}) => {
  const navigate = useNavigate(); // Access navigation function

  // Effect to handle reset via P1 button
  useEffect(() => {
    if (clickedSensors.includes("P1")) {
      console.log("P1 Start/Reset button clicked from Rainforest");
      setStoryActive(false); // Ends the story state
      navigate("/"); // Navigate back to the SensorDisplay page
    }
  }, [clickedSensors, setStoryActive, navigate]);

  // Debugging logs for props
  console.log("Rendering Rainforest component");
  console.log("Story Active:", storyActive);
  console.log("Pressed Buttons:", pressedButtons);
  console.log("Clicked Sensors:", clickedSensors);

  return (
    <div className="rainforest">
      {/* Main Content */}
      <RainforestSVG />
      <BurningForestSVG />

      {/* Story Overlay */}
      {storyActive && (
        <div className="story-overlay">
          <h2>Rainforest Adventure</h2>
          <p>
            You are deep in the rainforest. You see signs of life everywhere.
            Suddenly, a shadow moves between the trees...
          </p>
          {/* Example interactive buttons */}
          <button onClick={() => alert("You follow the shadow...")}>
            Follow the shadow
          </button>
          <button onClick={() => alert("You stay still...")}>Stay still</button>
        </div>
      )}
    </div>
  );
};

export default Rainforest;
