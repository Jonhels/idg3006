import React from "react";
import { ReactComponent as WitneSVG} from "../../../assets/svg/wintes.svg";
import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import "./Witness.css";

const WitnesSVG = () => {
    return (
        <div className="Witnes-container">
        <WitneSVG className="Witnes-img"/>
        <div className="">
                <button className="btnAct-container">You witness a man cutting down a tree! What do you want to do?</button>
            <div className="witness-btn">
                <Link to={"/IllegalComponent"} className="btn-container">
                
                <button className="btnBad">You do nothing and walk away</button>
                    <Badbtn className="BadBtn-img"/>
                </Link> 
            
                <Link to={"/Good-act"} className="btn-container">
                <Goodbtn className="goodBtn-img"/>
                <button className="btnGood">You try to help</button>
                </Link>
           </div>

        </div>
    </div>
    );
}

export default WitnesSVG;