import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WildFire.css";
import WildFireSVG from "./WildfireChoiceSVG";
import { usePageReset } from "../../../hooks/usePageReset";
import { useSensorContext } from "../../../context/SensorContext";



export function WildfireChoice({ setStoryActive }) {
    const { clickedSensor, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to challenge from DestroyedForest");
            navigate("/DestroyedForest");
            setPressedButtons([]);
        } else if (pressedButtons.includes("button_b_pressed")) {
            console.log("Navigating to wildfire from Good-act");
            navigate("/Firefighter");
            setPressedButtons([]);
        }
    }, [pressedButtons, navigate, setPressedButtons]);
    
    return (
        <div className="GoodAct-container">
            <WildFireSVG />
        </div>
    );
};
export default WildfireChoice;