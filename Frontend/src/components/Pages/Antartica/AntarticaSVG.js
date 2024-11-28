import React from "react";
import { ReactComponent as ColdSVG} from "../../../assets/svg/Antartica.svg";
import "./antartica.css";

export function AntarticaSVG() {
    return (
        <div className="ColdSVG">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WtoxxHADnGk?si=zrCObLIb_uIjMmTh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <ColdSVG width="" height="" />
        </div>
        
    );
}

export default AntarticaSVG;