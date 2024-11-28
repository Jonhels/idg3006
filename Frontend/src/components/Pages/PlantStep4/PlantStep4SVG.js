import React from "react";
import { ReactComponent as GrabbTreeImg} from "../../../assets/svg/plantStep4.svg";
import { ReactComponent as NewTree} from "../../../assets/svg/GrownUpTree.svg";
import { Link } from "react-router-dom";

import "./PlantStep4.css";


const PlantStep4SVG = () => {
    return (
        <div>
            <div className="GrownUpTree">
                <NewTree/>
            </div>
            <Link to={"/"}>
                        <div className="step4-box-container">
                            <h2 className="step4-box">The forest starts to look better and better.
                            Good job little friend! </h2>
                        </div>
                        <button className="plant-btn">Go back home by pressing Restart</button>
            </Link> 
                <GrabbTreeImg/> 
        </div>
    );
}

export default PlantStep4SVG;