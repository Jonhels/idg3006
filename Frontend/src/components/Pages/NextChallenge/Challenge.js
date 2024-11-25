import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import "./Challenge.css";
import ChallengeSVG from "./ChallengeSVG";
import { usePageReset } from "../../../hooks/usePageReset";

export function Challenge({ setStoryActive }) {
    const { pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();
    usePageReset({ setStoryActive });
    
    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to wildfire from Good Act");
            navigate("/wildfire");
            setPressedButtons([]); // Clear pressed buttons after navigation
        }
    }, [pressedButtons, navigate, setPressedButtons]);
    return (
        <div className="GoodAct-container">
            <ChallengeSVG />
        </div>
    );
}
export default Challenge;