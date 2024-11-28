import React, { useEffect } from "react";
import DestroyedForestSVG from "./ChoosePlantSVG";
// import { Link } from "react-router-dom";
import "./ChoosePlant.css";
import { usePageReset } from "../../../hooks/usePageReset";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";

const ChoosePlant = ({ setStoryActive }) => {
    const { clickedSensors, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to Illegal Act from Rainforest");
            navigate("/GrabbTree");
            setPressedButtons([]); // Clear pressed buttons after navigation
        } 
    }, [pressedButtons, navigate, setPressedButtons]);

    return (
        <div>
            <DestroyedForestSVG/>
        </div>
    );
}
 
export default ChoosePlant;