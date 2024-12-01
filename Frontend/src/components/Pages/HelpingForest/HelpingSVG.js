import React from "react";
import "./Helping.css";
import { ReactComponent as HelpingImg} from "../../../assets/svg/helpingForest.svg";
// import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
// import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";
import { ReactComponent as Fire} from "../../../assets/svg/Fire.svg";
import { ReactComponent as Boy} from "../../../assets/svg/Boy.svg";
import { Link } from "react-router-dom";

export function HelpingSVG() {
    return (
        <div className="wildFire-container">
            <Link to={"/ChoosePlant"}>
                <button className="fire-box">The fire is down. Good job!
                A lot of wildlife was saved.</button>
                <button className="fire-btn">Press A to continue a jurney</button> 
            </Link> 
            <div className="fire-container">
                <Fire/>
            </div>
            <div className="boy-container">
                 <Boy/>
            </div>
           
           <HelpingImg className="wildFire-img"/>
        </div>
    );
}
export default HelpingSVG;