import React from "react";
import "./dessert.css"
import DessertforestSVG from "./dessertSVG";
import { usePageReset } from "../../../hooks/usePageReset";

const Dessertforest = ({ setStoryActive }) => {
    usePageReset({ setStoryActive });
    return (
        <div className="dessert">
            <DessertforestSVG  />
        </div>
    );
};


export default Dessertforest;
