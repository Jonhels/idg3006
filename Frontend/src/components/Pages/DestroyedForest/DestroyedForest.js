import React, { useEffect } from "react";
import DestroyedForestSVG from "./DestroyedForestSVG";
// import { Link } from "react-router-dom";
import "./Destroy.css";
import { useSensorContext } from "../../../context/SensorContext";
import { useNavigate } from "react-router-dom";
import { usePageReset } from "../../../hooks/usePageReset";


const DestroyedForest = ({ setStoryActive }) => {
    const { clickedSensors, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to Illegal Act from Rainforest");
            navigate("/ChoosePlant");
            setPressedButtons([]); // Clear pressed buttons after navigation
        } 
    }, [pressedButtons, navigate, setPressedButtons]);

    return (
        <div>
            <DestroyedForestSVG/>
        </div>
    );
}
 
export default DestroyedForest;