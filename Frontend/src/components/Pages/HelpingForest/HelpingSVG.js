import React from "react";
import "./Helping.css";
import { ReactComponent as HelpingImg} from "../../../assets/svg/helpingForest.svg";
// import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
// import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";

import { Link } from "react-router-dom";

export function HelpingSVG() {
    return (
        <div className="wildFire-container">
            <Link to={"/PlantStep1"}>
                <button className="fire-box">The fire is down. Good job!
                A lot of wildlife was saved.</button>
                <button className="fire-btn">Press A to continue a jurney</button> 
            </Link> 
           <HelpingImg className="wildFire-img"/>
        </div>
    );
}
export default HelpingSVG;