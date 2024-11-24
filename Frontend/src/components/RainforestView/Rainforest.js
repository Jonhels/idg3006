import React from "react";
import "./rainforest.css";
import RainforestSVG from "./RainforestSVG";
import BurningForestSVG from "./BurningForest";

const Rainforest = ({ storyActive, setStoryActive, pressedButtons, clickedSensors }) => {
    const handleEndStory = () => {
        setStoryActive(false); // Ends the story when called
    };

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
                    <button onClick={() => alert("You follow the shadow...")}>Follow the shadow</button>
                    <button onClick={() => alert("You stay still...")}>Stay still</button>
                    <button onClick={handleEndStory}>End Story</button>
                </div>
            )}
        </div>
    );
};

export default Rainforest;
