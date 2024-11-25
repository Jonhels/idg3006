import React from "react";
import { ReactComponent as BurningForestSVG} from "../../assets/svg/burningForest.svg";
import "./rainforest.css";
import { usePageReset } from "../../../hooks/usePageReset";

const BurningForest = ({ setStoryActive }) => {
    usePageReset({ setStoryActive });
    return (
    <div>
        <BurningForestSVG width="" height="" />
    </div>
    );
}

export default BurningForest;