import WitnesSVG from "./WitnesSVG";
import "./Witness.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";
import { usePageReset } from "../../../hooks/usePageReset";

const Witnes = ({ setStoryActive }) => {
    const { clickedSensor, pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();

    usePageReset({ setStoryActive });

    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to challenge from DestroyedForest");
            navigate("/IllegalComponent");
            setPressedButtons([]);
        } else if (pressedButtons.includes("button_b_pressed")) {
            console.log("Navigating to wildfire from Good-act");
            navigate("/Good-act");
            setPressedButtons([]);
        }
    }, [pressedButtons, navigate, setPressedButtons]);
    
    return (
        <WitnesSVG/>
    );
}

export default Witnes;