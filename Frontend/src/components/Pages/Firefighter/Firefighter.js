import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Firefighter.css";
import FirefighterSVG from "./FirefighterSVG";
import { usePageReset } from "../../../hooks/usePageReset";
import { useSensorContext } from "../../../context/SensorContext";



export function Firefighter({ setStoryActive }) {
    const { clickedSensor, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to challenge from DestroyedForest");
            navigate("/Helping");
            setPressedButtons([]);
        }
    }, [pressedButtons, navigate, setPressedButtons]);
    
    return (
        <div className="GoodAct-container">
            <FirefighterSVG />
        </div>
    );
};
export default Firefighter;