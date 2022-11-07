import React, { useState } from "react";
import "../styles/Home.css";
import SingleCard from "./SingleCard";

function Home() {
 

  return (
    <div className="homepage">
      <div className="text-section">
        <h1>Movies</h1>
        <p>
          <span className="text">
            Movies move us like nothing else can, whether they're scary, funny,
            <br />
            dramatic, romantic or anywhere in-between. So many titles, so much
            to
            <br />
            experience.
          </span>
        </p>
      </div>
      <div className="container-fluid movie-app">
        <div className="row">
          <SingleCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
