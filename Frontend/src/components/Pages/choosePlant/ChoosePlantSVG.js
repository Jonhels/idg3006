import React from "react";
import { ReactComponent as DestroyBtn} from "../../../assets/svg/DontHelpFire.svg";
import { Link } from "react-router-dom";
import "./ChoosePlant.css";
import { ReactComponent as LightSensor2} from "../../../assets/svg/LightSensor.svg";
import { ReactComponent as BadTree} from "../../../assets/svg/BadTree.svg";
import { ReactComponent as Busk} from "../../../assets/svg/Bad-Busker.svg";


const ChoosePlantSVG = () => {
    return (
        <div className="destroyedFire-container">
             <div className="BadTree">
                    <BadTree/>
                    
                </div>
                <div className="busk">
                     <Busk/>
                </div>
               
             <div>
                    <h2 className="ChoosePlant-Box">
                    You see the landscape after a wildfire. 
                    Make a good choice and plant a tree by grabbing a tree you like from the platform 
                    </h2>     
            </div>
                <div className="choosePlant-btn">
                    <Link to={"/GrabbTree"} className="Firebtn-container">
                        <div className="LightSensor-icon">
                            <LightSensor2 className="Lighticon"/>
                        </div>
                       
                        <button className="choose-btn">Put a Tree in the empty space, then press A</button>
                    </Link> 
                </div>
               
               
           
            <DestroyBtn className="Destroy" width=""/>         
        </div>
    );
}

export default ChoosePlantSVG;