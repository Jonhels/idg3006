import React from "react";
import "./global.css";
import GlobalSVG from "./GlobalSVG";
import { Link } from "react-router-dom";


export function Global() {
    return (
        <div className="earth-container">
            <GlobalSVG width="200px" height="200px"/>
            <Link to="/button-test">
            <button> ButtonTest</button>
            </Link>

        </div>
    );
}

export default Global;