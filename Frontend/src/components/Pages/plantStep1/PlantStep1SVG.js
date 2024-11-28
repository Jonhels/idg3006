import React from "react";
import PlantStep1 from "./PlantStep1SVG";
import { ReactComponent as PlantStep1Img} from "../../../assets/svg/plantStep1.svg";
// import { Link } from "react-router-dom";
import "./PlantStep.css";


const PlantStep1SVG = () => {
    return (
        <div>
            <PlantStep1Img/>
            <PlantStep1/>
        </div>
    );
}
 
export default PlantStep1SVG;