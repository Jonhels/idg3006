import React from "react";
import "./Challenge.css";
import { Link } from "react-router-dom";
import { ReactComponent as ChallengeImg} from "../../../assets/svg/NextChallenge.svg";
import { ReactComponent as BtnCont} from "../../../assets/svg/Btn-Continue.svg";


export function ChallengeSVG() {
    return (
        <div className="GoodAct-container">
            <ChallengeImg />
            <div className="Choice-btn">
                <Link to={"/Wildfire"}>
                    <BtnCont className="BadBtn-img"/>
                </Link>
               
            </div>
        </div>
    );
}
export default ChallengeSVG;