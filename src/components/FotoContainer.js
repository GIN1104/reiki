import React from 'react'
import WhatIsReiki from "../img/what-is-reik.png";
import {isMobile} from 'react-device-detect';

function FotoContainer() {
    return (
        <div className="d-flex pt-5" >
              <img src={WhatIsReiki} className="mx-auto  p-5" style={isMobile ? {width: "90vw" } : {width: "60vw"}} alt="what is reiki"/>
        </div>
    )
}

export default FotoContainer
