import React from "react";
import { ReactComponent as DestroyBtn} from "../../../assets/svg/DestroyedForest.svg";
import { ReactComponent as Tree} from "../../../assets/svg/BrokenTree.svg";

// import { Link } from "react-router-dom";
import "./Destroy.css";


const DestroyedForestSVG = () => {
    return (
        <div>
            <DestroyBtn className="Destroy" width=""/>
            <Tree className="Destroy" width=""/>
        </div>
    );
}
 
export default DestroyedForestSVG;