import React from "react";
import "./goodAct.css";
import { ReactComponent as GoodActImg} from "../../../assets/svg/GoodAct.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";


const GoodActSVG = () => {
    return (
        <div className="GoodAct-container">
            <GoodActImg/>

            <div className="Choice-btn">
                <Link to={"/Challenge"}>
                    <Badbtn className="BadBtn-img"/>
                </Link>
                <Link to={"/Challenge"}>
                    <Goodbtn className="goodBtn-img"/>
                </Link>
            </div>
        </div>
    );
}
export default GoodActSVG;