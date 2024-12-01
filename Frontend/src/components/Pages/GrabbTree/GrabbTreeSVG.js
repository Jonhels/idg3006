import React from "react";
import { ReactComponent as GrabbTreeImg} from "../../../assets/svg/plantStep3.svg";
import { ReactComponent as NewTree} from "../../../assets/svg/NewPlantTree.svg";
import { Link } from "react-router-dom";
import { ReactComponent as LightSensor2} from "../../../assets/svg/LightSensor.svg";


import "./Grabb.css";


const GrabbTreeSVG = () => {
    return (
        <div>
            <div className="newTree">
                <NewTree/>
            </div>
            <Link to={"/PlantStep3"}>
                        <div className="GrabbLight-icon">
                            <LightSensor2 className="Grabb-icon"/>
                            <button className="btn-grabbTree">Plant tree by pressing A</button>
                        </div>
            </Link> 

                <GrabbTreeImg/> 
        </div>
        
    );
}

export default GrabbTreeSVG;