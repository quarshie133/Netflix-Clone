import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
// import Row from './components/pages/Row';
// import requests from './requests'




function App() {
   
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Row title="NETLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> */}
     
    </div>
  );
}

export default App;
