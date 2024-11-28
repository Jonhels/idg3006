import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Helping.css";
import HelpingSVG from "./HelpingSVG";
import { usePageReset } from "../../../hooks/usePageReset";
import { useSensorContext } from "../../../context/SensorContext";



export function Helping({ setStoryActive }) {
    const { clickedSensor, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to challenge from DestroyedForest");
            navigate("/ChoosePlant");
            setPressedButtons([]);
        }
    }, [pressedButtons, navigate, setPressedButtons]);
    
    return (
        <div className="GoodAct-container">
            <HelpingSVG />
        </div>
    );
};
export default Helping;