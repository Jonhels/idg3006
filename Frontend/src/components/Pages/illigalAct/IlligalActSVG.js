import React from "react";
import { ReactComponent as ActSVG} from "../../../assets/svg/illegalAct.svg";
import { ReactComponent as TreeFallSVG} from "../../../assets/svg/TreeFall.svg";
import { ReactComponent as Man} from "../../../assets/svg/ChainSaw-man.svg";
import { ReactComponent as PopUp} from "../../../assets/svg/illegal-popup.svg";
import { ReactComponent as BlueBoy} from "../../../assets/svg/blueBoy.svg";
import { ReactComponent as BadBtn} from "../../../assets/svg/stop-btn.svg";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import "./Act.css";

const IlligalActSVG = () => {
    return (
            <div className="illigalAct-container">
                <TreeFallSVG className="Treefall-img" />
                
                <BlueBoy className="RunBoy" />
                <PopUp className="Popup-img"/>
                <Man className="Man-img"/>
                <ActSVG className="Act-img"/>
                <div className="Choice-btn">
                    <Link to={"/Challenge"}>
                        <BadBtn className="goodBtn-img"/>
                    </Link>
                </div>
            </div>
    );
}

export default IlligalActSVG;