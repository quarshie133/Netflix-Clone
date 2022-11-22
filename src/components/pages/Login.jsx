import React, { useEffect } from "react";
import "../styles/Login.css";
import logo from "../assests/logo.png"
// import Background from "../assests/backgroundlandingpage.jpg"

function Login({ setNavbar }) {
  useEffect(() => {
    setNavbar(true);
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
           <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
