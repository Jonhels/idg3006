import React from "react";
import "./WildFire.css";
import { ReactComponent as WildFire} from "../../../assets/svg/WildFireChoice.svg";
import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";

import { Link } from "react-router-dom";

export function WildfireChoiceSVG() {
    return (
        <div className="wildFire-container">

            <div className="wildFire-btn">
                <Link to={"/DestroyedForest"} className="Firebtn-container">
                
                <button className="btnBad">You do nothing and walk away</button>
                    <Badbtn className="BadBtn-img"/>
                </Link> 
            
                <Link to={"/Firefighter"} className="Firebtn-container">
                <Goodbtn className="goodBtn-img"/>
                <button className="btnGood">You try to help</button>
                </Link>
           </div> 
           <div className="fireBox-img">
                    <h1>
                    You witness an wildfire!  What are you gonna do?
                    </h1>
            </div>
           <WildFire className="wildFire-img"/>
        </div>
    );
}
export default WildfireChoiceSVG;