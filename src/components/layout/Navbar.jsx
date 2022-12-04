import React from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
const location = useLocation();

  return (
    <div className="nav">
      <Link to="/login">
        <img className="nav__logo" src={logo} alt="netflix Logo" />
        
      </Link>
      <div className="btn">
        <ul>
          <li>
            <button className="btn-1">unlimited tv shows & movies</button>
            <button className="btn-2">join now</button>
            <button className="btn-3">sign in</button>
          </li>
        </ul>
      </div>
  </div>
  );
}

export default Navbar;