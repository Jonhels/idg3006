import React from "react";
import { ReactComponent as ForestSVG} from "../../assets/svg/rainforest.svg";
import { ReactComponent as BuskSVG} from "../../assets/svg/Busker.svg";
import { ReactComponent as BuskForanSVG} from "../../assets/svg/BuskerForan.svg";
import { ReactComponent as BladerForanSVG} from "../../assets/svg/bladerForan.svg";
import { ReactComponent as Blad1SVG} from "../../assets/svg/blad1.svg";
import { ReactComponent as Blad3SVG} from "../../assets/svg/blad3.svg";
import { ReactComponent as MørkBladSVG} from "../../assets/svg/BladMørk.svg";
import { ReactComponent as BoxSVG} from "../../assets/svg/BoxChainsaw.svg";
import "./rainforest.css";

const RainforestSVG = () => {
    return (
            <div className="Rainforest-container">
                 <MørkBladSVG className="MørkBlad-img"/>
                <Blad3SVG className="Blad3-img"/>
                 <Blad1SVG className="Blad1-img"/>
                <BuskSVG className="BuskBak-img"/>
                <BladerForanSVG className="BladerForan-img"/>
                <BuskForanSVG className="BuskForan-img"/>  
                <BoxSVG className="boxSVG-img"/>
                <ForestSVG width="" height="" />
            </div>
    );
}

export default RainforestSVG;