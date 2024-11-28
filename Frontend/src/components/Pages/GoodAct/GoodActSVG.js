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
            <div className="Man-boxText">
                <p className="boxText">
                    It's good that you contacted us.
                    Good job my little friend!
                </p>
            </div> 
            <div className="Kid-boxText">
                <p className="boxText">
                Hi, glad that you came. I saw someone cutting down the tree. 
                </p>
            </div> 
            <div className="box-fact">
                <h3 className="fact">
                    Trees and other green plants produce oxygen,
                    the gas needed by humans and animals to live. 
                </h3>
            </div>
            <div className="GoodAct-btn">
                <Link to={"/Challenge"} className="btn-container">
                
                <button className="btnBad">You do nothing and walk away</button>
                    <Badbtn className="BadBtn-img"/>
                </Link> 
            
                <Link to={"/Challenge"} className="btn-container">
                <Goodbtn className="goodBtn-img"/>
                <button className="btnGood">You try to help</button>
                </Link>

               
            </div> 
                <div className="GoodActBox-img">
                    <h1>
                        Make people aware and contribute to action.
                    </h1>
                </div>
            
        </div>
    );
}
export default GoodActSVG;