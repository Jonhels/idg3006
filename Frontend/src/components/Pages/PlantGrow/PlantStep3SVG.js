import React from "react";
import { ReactComponent as PlantStepImg} from "../../../assets/svg/plantStep3.svg";
import { ReactComponent as NewTree} from "../../../assets/svg/NewPlantTree.svg";
import { Link } from "react-router-dom";
import { ReactComponent as TreeBigger} from "../../../assets/svg/LightSensor.svg";
import { ReactComponent as Tree} from "../../../assets/svg/Planting.svg";
import "./PlantStep3.css";


const PlantStep3SVG = () => {
    return (
        <div>
            <div className="OldTree">
                <NewTree/>
            </div>
            <Link to={"/PlantStep4"}>
                        <div className="GrabbLight-icon">
                            <TreeBigger className="Grabb-icon"/>
                            <button className="btn-grabbTree">Water the tree then Press A</button>
                        </div>
                        <div className="">
                              <Tree className="planting"/>
                        </div>
                      
                      
            </Link> 
                <PlantStepImg/> 
        </div>
    );
}

export default PlantStep3SVG;