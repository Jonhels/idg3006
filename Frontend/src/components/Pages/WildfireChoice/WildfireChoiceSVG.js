import React from "react";
import "./WildFire.css";
import { ReactComponent as WildFire} from "../../../assets/svg/WildFireChoice.svg";
import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";

import { Link } from "react-router-dom";

export function WildfireChoiceSVG() {
    return (
        <div className="GoodAct-container">
           
           <WildFire className="WildFire-img"/>
           
            <div className="Choice-btn">
                <Link to={"/DestroyedForest"}>
                    <Badbtn className="BadBtn-img"/>
                </Link>
                <Link to={"/GoodAct"}>
                    <Goodbtn className="goodBtn-img"/>
                </Link>
            </div>
           
        </div>
    );
}
export default WildfireChoiceSVG;