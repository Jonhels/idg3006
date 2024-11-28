import React from "react";
import "./DesertChange.css"
import { usePageReset } from "../../../hooks/usePageReset";
import { ReactComponent as DesertChangeImg} from "../../../assets/svg/desertChanging.svg";

const DesertChangeSVG = ({ setStoryActive }) => {
    usePageReset({ setStoryActive });
    return (
        <div className="dessertChange">
            <DesertChangeImg/>
                
        </div>
    );
};


export default DesertChangeSVG;
