import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  //functions definitions
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobleMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobleMenu}>
            <img src="images/SafLogo.jpeg" width={80} height={80}/>
          </Link>
          <div className="Title">
          <h1>SAF</h1>  
          </div>
          <div className="Title2">
          <h1>Farm</h1>  
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobleMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
