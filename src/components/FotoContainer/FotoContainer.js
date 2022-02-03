import React from 'react';
import "./FotoContainer.css";

// import {isMobile} from 'react-device-detect';
// import WhatIsReiki from "../../img/what-is-reik-min.png";
// import Helix_Nebula from "../../img/helix_nebula.jpg";

function FotoContainer() {
    return (
        <div className=" pt-5 bg_image" >
         <div className="p-5 text-center text-white">
            <h1 className="font-italic">Reiki Across The Universe</h1>
        </div>
        {/* <div className="d-flex">
                 <img src={Helix_Nebula} className="mx-auto  p-5" style={isMobile ? {width: "90vw" } : {width: "60vw"}} alt="what is reiki"/> 
            </div> 
            */}
            <div className="text-center text-white bottom_container">
                <h3>
                 Universal Mind-Body Healing Energy
                </h3>
            </div>

        </div>
    )
}

export default FotoContainer
