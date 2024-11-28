import React from "react";
import AntarticaSVG from "./AntarticaSVG";
import "./antartica.css";
import { usePageReset } from "../../../hooks/usePageReset";
import Box from "./Box";

const Antartica = ({ setStoryActive }) => {
    usePageReset({ setStoryActive });
    return (
        <div>
            <div className="box">
                
            <Box/> 
            </div>
            
            <AntarticaSVG   />    
        </div>

    );
}

export default Antartica ;
