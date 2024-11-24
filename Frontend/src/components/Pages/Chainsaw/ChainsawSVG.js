import React from "react";
import "./chainsaw.css";
import { ReactComponent as ChainsawIMG} from "../../../assets/svg/ChainsawImg.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";


const ChainsawSVG = () => {
    return (
        <div className="Chainsaw-container">
            <div className="Choice-btn">
                <Link to={"/IlligalAct"}>
                    <Badbtn className="BadBtn-img"/>
                </Link>
                <Link to={"/GoodAct"}>
                    <Goodbtn className="goodBtn-img"/>
                </Link>
            </div>
            <ChainsawIMG width="100%" height="100%"/>
        </div>
    );
}
export default ChainsawSVG;