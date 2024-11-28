import "./global.css";
import { usePageReset } from "../../../hooks/usePageReset";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../../../context/SensorContext";



const ButtonTest = ({ setStoryActive }) => {
    const { pressedButtons, setPressedButtons } = useSensorContext();
    const navigate = useNavigate();
    usePageReset({ setStoryActive });
    
    // Handle navigation to Challenge
    useEffect(() => {
        if (pressedButtons.includes("button_a_pressed")) {
            console.log("Navigating to main from ButtonTest");
            navigate("/");
            setPressedButtons([]); // Clear pressed buttons after navigation
        } else if (pressedButtons.includes("button_b_pressed")) {
            console.log("Navigating to wildfire from Good Act");
            navigate("/good-act")
            setPressedButtons([]);
        }
    }, [pressedButtons, navigate, setPressedButtons]);
    return (
        <div>
        <h1>Hello</h1>
    </div>
    );
}
export default ButtonTest;