import React from "react";
import AntarticaSVG from "./AntarticaSVG";
import "./antartica.css";
import { usePageReset } from "../../../hooks/usePageReset";

const Antartica = ({ setStoryActive }) => {
    usePageReset({ setStoryActive });
    return (
        <div>
            <AntarticaSVG   />
        </div>

    );
}

export default Antartica ;
