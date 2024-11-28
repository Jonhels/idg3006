import React from "react";
import "./global.css";
import GlobalSVG from "./GlobalSVG";



export function Global() {
    return (
        <div className="earth-container">
            <GlobalSVG width="200px" height="200px"/>
        </div>
    );
}

export default Global;