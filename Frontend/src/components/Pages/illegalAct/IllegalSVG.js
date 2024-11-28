import React from "react";
import { ReactComponent as IllegalIcon} from "../../../assets/svg/illegalAct.svg";
import { ReactComponent as TreeFallSVG} from "../../../assets/svg/TreeFall.svg";
import { ReactComponent as Man} from "../../../assets/svg/ChainSaw-man.svg";
import { ReactComponent as PopUp} from "../../../assets/svg/illegal-popup.svg";
import { ReactComponent as BlueBoy} from "../../../assets/svg/blueBoy.svg";
// import { ReactComponent as BadBtn} from "../../../assets/svg/stop-btn.svg";
import { Link } from "react-router-dom";
import "./Act.css";


const IllegalSVG = () => {
    return (
        <div className="illegalAct-container">
                <TreeFallSVG className="Treefall-img" />
                <BlueBoy className="RunBoy" />
                <PopUp className="Popup-img"/>
                <Man className="Man-img"/>
                <IllegalIcon className="Act-img"/>
            <div className="">
                <Link to={"/Challenge"}>
                    <button className="btnAct-container">Forest has less and less trees because of chopping them down. This leads to big problems.</button>
                    <button className="btnGood-IlligalAct">Press A</button>      
                </Link>

            </div>
        </div>
    );
};

export default IllegalSVG;