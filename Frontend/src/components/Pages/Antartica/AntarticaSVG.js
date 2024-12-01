import React from "react";
import { ReactComponent as ColdSVG} from "../../../assets/svg/Antartica.svg";
import "./antartica.css";

export function AntarticaSVG() {
    return (
        <div className="ColdSVG">
            <div className="antartica-container-info">
                <h2>
                    The Arctic is one of the coldest places on Earth,
                    but it’s warming up faster than any other place.
                    The ice is melting, and that’s causing the sea level to rise.
                    This affects the animals that live there and the rest of the world, too.
                </h2>
            </div>
            <div className="video-img">
            <iframe className="videoClip" width="560" height="315" src="https://www.youtube.com/embed/Z5VRoGTF60s?si=VIZm3IIat-6Et786&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <ColdSVG width="" height="" />
        </div>
        
    );
}

export default AntarticaSVG;