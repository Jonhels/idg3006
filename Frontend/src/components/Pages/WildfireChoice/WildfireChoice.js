import React from "react";
import "./WildFire.css";
import WildFireSVG from "./WildfireChoiceSVG";
import { usePageReset } from "../../../hooks/usePageReset";

export function WildfireChoice({ setStoryActive }) {
    usePageReset({ setStoryActive });
    return (
        <div className="GoodAct-container">
            <WildFireSVG />
        </div>
    );
}
export default WildfireChoice;