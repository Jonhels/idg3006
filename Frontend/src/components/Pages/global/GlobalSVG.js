import React from "react";
import "./global.css";
// import { ReactComponent as Map1 } from "../../assets/svg/earth-map1.svg";
import { ReactComponent as Map2 } from "../../../assets/svg/earth-map.svg";
// import { ReactComponent as Land1 } from "../../assets/svg/land1.svg";
// import { ReactComponent as Cloud1 } from "../../../assets/svg/Clouds1.svg";
import { ReactComponent as GlobeImg } from "../../../assets/svg/jordkloden.svg";


export function GlobalSVG() {
    return (
        <div className="Globe-container">
            <div className="globalView">   
                <div className="globe-container">
                    <Map2 className="clode-contain map2" />   
                </div>
                <GlobeImg className="Globe" />
            </div> 
        </div> 
    );
}

export default GlobalSVG;