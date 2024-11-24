import React from "react";
import { ReactComponent as ForestSVG} from "../../../assets/svg/Forground.svg";
import { ReactComponent as BuskSVG} from "../../../assets/svg/Busker.svg";
import { ReactComponent as BuskForanSVG} from "../../../assets/svg/BuskerForan.svg";
import { ReactComponent as BladerForanSVG} from "../../../assets/svg/bladerForan.svg";
import { ReactComponent as Blad1SVG} from "../../../assets/svg/blad1.svg";
import { ReactComponent as Blad3SVG} from "../../../assets/svg/blad3.svg";
import { ReactComponent as MorkBladSVG} from "../../../assets/svg/BladMørk.svg";
// import { ReactComponent as Planet} from "../../../assets/svg/planet.svg";
import { ReactComponent as BoxSVG} from "../../../assets/svg/BoxChainsaw.svg";
import { Link } from "react-router-dom";


import "./rainforest.css";

const RainforestSVG = () => {
    return (
            <div className="Rainforest-container">
                    <MorkBladSVG className="MorkBlad-img"/>
                    <Blad3SVG className="Blad3-img"/>
                    <Blad1SVG className="Blad1-img"/>
                    <BuskSVG className="BuskBak-img"/>
                    <BladerForanSVG className="BladerForan-img"/>
                    <BuskForanSVG className="BuskForan-img"/>
                    {/* <Planet className="Planet-img"/> */}
                <Link to={"/Chainsaw"}>
                    <BoxSVG className="boxSVG-img"/>
                </Link>

                <ForestSVG width="" height=""/>
            </div>
    );
}

export default RainforestSVG;