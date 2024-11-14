import React from "react";
import "./rainforest.css";
// import BirdBlue from "./BirdBlue";
// import Forestview from "./BackgroundForest";
// import Bush1 from "./Bush";
import RainforestSVG from "./RainforestSVG";
import BurningForestSVG from "./BurningForest";




const Rainforest = () => {
    return (
            <div className="rainforest">
                {/* <h2>Welcome to regnskogen</h2> */}
                {/* <Forestview   />
                <BirdBlue   />
                <Bush1 /> */}
                {/* <RainforestSVG /> */}
                {/* Conditional rendering */}
                {/* <blad  /> */}
                
                <RainforestSVG />
                <BurningForestSVG/>
                
            </div>
    );
};

export default Rainforest;