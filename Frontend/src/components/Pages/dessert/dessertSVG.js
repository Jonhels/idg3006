import React from "react";
import { ReactComponent as DessertSVG } from "../../../assets/svg/dessert.svg";
import { ReactComponent as SunImg } from "../../../assets/svg/Dessert-sun.svg";
import { ReactComponent as LandscapeImg } from "../../../assets/svg/LandscapeDessert.svg";
import "./dessert.css";
import { Link } from "react-router-dom";


const DessertforestSVG = () => {
    return (
        <div className="dessert-container">
        
            <div className="landscape-container">
            </div>
           
            <div className="dessertImgb">
                <LandscapeImg/>
            </div>
             
          <div className="sunImg">
                  <SunImg/> 
            </div>
            <div className="information-dessert">
                <h1>The Sahara is the largest hot desert on Earth. It covers about 8,600,000 square kilometers</h1>
            </div>
            <div className="tempRise">
                <div className="kule"></div>
            </div>
            <div>
            <Link to={"/DesertChange"} className="desertChange">
                    <button className="">You try to help Press A</button>
            </Link>
            </div>
            <DessertSVG width="" height=""   /> 
           
        </div>

    );
}

export default DessertforestSVG;
