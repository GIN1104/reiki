import React from "react";
import { FaCopyright  } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer bg-info mt-4">
      <div className="container text-center">
        <div className="">
          <div className="col-lg-12 p-2">
              <AiOutlineMail size={30} className="icon"/>  <a href="mailto:starchenkogin@gmail.com" target="_blank" rel="noreferrer" className="footer_email" style={{ color:"black", textDecoration: "none"}}>Elena@gmail.com</a><br/>
              <AiOutlinePhone size={30} className="icon"/><a href="tel:" style={{fontSize: "1.25rem", color:"black", textDecoration: "none"}}> +8888888888</a>
       <p className="copyright"><FaCopyright size={30}/> Elena Robertson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
