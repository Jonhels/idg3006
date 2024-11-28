import React from "react";
import "./DesertChange.css"
import DesertChangeSVG from "./DesertChangeSVG";
import { usePageReset } from "../../../hooks/usePageReset";

const DesertChange = ({ setStoryActive }) => {
    usePageReset({ setStoryActive });
    return (
        <div className="dessert">
            <DesertChangeSVG  />
        </div>
    );
};


export default DesertChange;
