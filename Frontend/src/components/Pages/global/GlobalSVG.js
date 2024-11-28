import React from "react";
import "./global.css";
// import { ReactComponent as Map1 } from "../../assets/svg/earth-map1.svg";
import { ReactComponent as Map2 } from "../../../assets/svg/earth-map.svg";
// import { ReactComponent as Land1 } from "../../assets/svg/land1.svg";
// import { ReactComponent as Cloud1 } from "../../../assets/svg/Clouds1.svg";

import { ReactComponent as DessertImg } from "../../../assets/svg/dessert-Img.svg";
import { ReactComponent as AntarticaImg } from "../../../assets/svg/cold_weather-img.svg";
import { ReactComponent as RainForestImg } from "../../../assets/svg/Chainsaw-img.svg";
import { Link } from "react-router-dom";


export function GlobalSVG() {
    return (
        <div className="Main-Container">
            
            <div className="games-container">
                <h1 className="main-header">Explore The World's climate</h1>
                <p className="PresStart">
                    Welcome, young explorers to the game! You are about to embark on an exciting journey to three of Earth's most amazing and fragile places: the Amazon Rainforest, the Desert, and the Arctic.
                    Along the way, you'll discover how our changing climate is affecting these ecosystems, and learn how you can help protect our planet.
                </p>
                <div className="images-container">
                    <div>
                        <RainForestImg className="image-item"/>
                        <p className="PresStart">Press A + B + START</p>
                    </div>
                    <div className="image-box">
                        <DessertImg className="image-item"/>
                        <p className="PresStart">Slide to No Water + B + Start</p>
                    </div>
                    <div>
                        <AntarticaImg className="image-item"/>
                        <p className="PresStart">Slide Water + A + START</p>
                    </div>
                </div>
                <Link className="" to="/rainforest">
                   <button className="btn-start">START</button>
                </Link>
            </div>
            <div className="globalView">  
                 
                <div className="globe-container">
                    <Map2 className="clode-contain map2" />   
                </div>
                
            </div> 
        </div> 
    );
}

export default GlobalSVG;