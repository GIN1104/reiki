import React from 'react';
import { Link } from "react-scroll"

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light  fixed-top" style={{backgroundColor: "#e3f2ef"}}>
  <div className="navbar-brand">Reiki</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link smooth={true} to="home" offset={-50} className="nav-link"  href="#"  >Home <span className="sr-only">   (current)</span></Link>
      </li>
        <li className="nav-item">
               <Link className="nav-link" smooth={true} to="about" href="#"  offset={-50} >About me</Link>
        </li>
      <li className="nav-item">
         <Link className="nav-link" smooth={true} to="contacts" href="#" offset={-85} >Contacts</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
