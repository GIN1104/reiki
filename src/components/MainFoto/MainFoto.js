import React from 'react';
import "./MainFoto.css";
import Img1 from "../../img/IMG_1-min.jpeg";

function MainFoto() {
  return (
         <div className="container_main">
            <img src={Img1} className="main_pic"  alt="main pic"/> 
            <p className="font-italic centered">Reiki Across The Universe</p>
        </div> 
           )
}

export default MainFoto;
