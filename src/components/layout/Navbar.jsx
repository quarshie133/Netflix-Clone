import React from "react";
import logo from "../assests/Netflix-Logo.wine.svg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a class="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item active">unlimited tv shows & movies</li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn-1">join now</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn-2"> sign in</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
