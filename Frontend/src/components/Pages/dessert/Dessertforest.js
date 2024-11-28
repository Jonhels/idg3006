import React from "react";
import "./dessert.css"
import DessertforestSVG from "./DessertSVG";
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
