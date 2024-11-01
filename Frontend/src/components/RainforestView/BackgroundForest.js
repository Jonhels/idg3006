import React from "react";
import bk from "../../assets/svg/BackgroundForest.svg"
import "./rainforest.css"

const Forestview = () => {
    return (
        <div>
            <img src={bk} alt="" className="bkForest-animation" />
        </div>
    );
}

export default Forestview;