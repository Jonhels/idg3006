import React from "react";
import "./Challenge.css";
import { Link } from "react-router-dom";
import { ReactComponent as ChallengeImg} from "../../../assets/svg/Forground.svg";

export function ChallengeSVG() {
    return (
        <div className="GoodAct-container">
            <ChallengeImg />
            <div className="btn-box">
                <h1>Start next challenge</h1>
            </div> 

                    <Link to={"/Wildfire"}>
                        <button className="btn">Explore more about RainForest</button>
                        <button className="btnGood-IlligalAct">Press A</button> 
                    </Link> 
        </div>
    );
}
export default ChallengeSVG;