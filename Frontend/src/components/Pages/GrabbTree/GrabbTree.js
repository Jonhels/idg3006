import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import GrabbTreeSVG from "./GrabbTreeSVG";

// import { Link } from "react-router-dom";
import "./Grabb.css";
import { usePageReset } from "../../../hooks/usePageReset";



const GrabbTree = ({ setStoryActive }) => {
    const { clickedSensors, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to Illegal Act from Rainforest");
            navigate("/PlantStep3");
            setPressedButtons([]); // Clear pressed buttons after navigation
        } 
    }, [pressedButtons, navigate, setPressedButtons]);

    return (
        <div>
            <GrabbTreeSVG/>
        </div>
    );
}

export default GrabbTree;