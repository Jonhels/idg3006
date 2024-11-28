import React from "react";
import "./Firefighter.css";
import { ReactComponent as WildFire} from "../../../assets/svg/FireFighter.svg";
// import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
// import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";

import { Link } from "react-router-dom";

export function FirefighterSVG() {
    return (
        <div className="wildFire-container">
            <Link to={"/Helping"}>
                <button className="fire-box">Use the slider to turn on the water for the firefighter</button>
                <button className="fire-btn">Turn the slider on then click A</button> 
            </Link> 
           <WildFire className="wildFire-img"/>
        </div>
    );
}
export default FirefighterSVG;