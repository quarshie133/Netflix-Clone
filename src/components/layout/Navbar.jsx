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

// <nav className="navbar navbar-expand-lg navbar-light bg-black">
//   <div className="container">
//     <a className="navbar-brand" href="#">
//       <img className="logo" src={logo} alt="logo" />
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     ></button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <div className="nav-left">
//         <ul className="navbar-nav ms-auto ">
//           <li className="nav-item-text active">
//             unlimited tv shows & movies
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               <button className="btn-1">join now</button>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               <button className="btn-2"> sign in</button>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </nav>
