import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/layout/Footer";

function App(props) {
  const [ isNavbarHidden, setIsNavbarHidden ] = useState(false);


  return (
    <Router>
     {isNavbarHidden ? null : <Navbar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={() => <Login setNavbar={setIsNavbarHidden} />} />
      </Switch>
    </Router>
  );
}

export default App;
