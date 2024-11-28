import React from "react";
import "./chainsaw.css";
import { ReactComponent as ChainsawIMG} from "../../../assets/svg/ChainsawImg.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Badbtn} from "../../../assets/svg/bad-btn.svg";
import { ReactComponent as Goodbtn} from "../../../assets/svg/Star.svg";


const ChainsawSVG = () => {
    return (
        <div className="Chainsaw-container">
            <div className="Choiced-btn">
                <Link to={"/illegal-act"} className="btn-container">
                
                <button className="btnBad">You do nothing and walk away</button>
                    <Badbtn className="BadBtn-img"/>
                </Link> 
            
                <Link to={"/Good-act"} className="btn-container">
                <Goodbtn className="goodBtn-img"/>
                <button className="btnGood">You try to help</button>
                </Link>
           </div>
        
           <div className="ChainsawBox-img">
                <h1>
                    Forest has less and less trees because of chopping them down. This leads to big problems.
                </h1>
            </div>
            <ChainsawIMG width="100%" height="100%"/>
        </div>
    );
}
export default ChainsawSVG;