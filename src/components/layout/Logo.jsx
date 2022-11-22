import React from 'react';
import logo from "../assests/logo.png";

function Logo() {
  return (
    <div>
      <img className="nav__logo" src={logo} alt="netflix Logo" />
    </div>
  );
}

export default Logo