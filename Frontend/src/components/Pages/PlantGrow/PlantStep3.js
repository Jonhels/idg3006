import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import PlantStep3SVG from "./PlantStep3SVG";

// import { Link } from "react-router-dom";
import "./PlantStep3.css";
import { usePageReset } from "../../../hooks/usePageReset";



const PlantStep3 = ({ setStoryActive }) => {
    const { clickedSensors, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to Illegal Act from Rainforest");
            navigate("/PlantStep4");
            setPressedButtons([]); // Clear pressed buttons after navigation
        } 
    }, [pressedButtons, navigate, setPressedButtons]);

    return (
        <div>
            <PlantStep3SVG/>
        </div>
    );
}

export default PlantStep3;