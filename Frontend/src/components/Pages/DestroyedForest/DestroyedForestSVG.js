import React from "react";
import { ReactComponent as DestroyBtn} from "../../../assets/svg/DontHelpFire.svg";
// import { ReactComponent as Tree} from "../../../assets/svg/BrokenTree.svg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Destroy.css";


const DestroyedForestSVG = () => {
    return (
        <div className="destroyedFire-container">

            <div className="infoDestroyed-box">
                <h2 className="">
                Trees capture Carbon dioxide, one of the gases that contribute to a problem known as
                global warming. The globe heating up leads to increased risk of wildfires!
                </h2>
            </div>
             <div>
                    <h1 className="btn-fireWitness">
                        Help the Amazon Rainforest by planting a tree and
                        contribute to better situation in forest.
                    </h1>
                
                <div>
                    
                    <Link to={"/ChoosePlant"} className="Firebtn-container">
                        <button className="Destroyed-btn">Press A</button>
                    </Link> 
                </div>
                  
            </div>
            <DestroyBtn className="Destroy" width=""/>
            {/* <Tree className="Destroy" width=""/> */}
          
        
            
        </div>

    );
}
 
export default DestroyedForestSVG;