import React from "react";
import "../styles/Home.css";
import Row from "../pages/Row";

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
          <Row />
        </div>
      </div>
    <div>
      <h2>There's even more to watch.</h2>
      <p>Nextflix has an extensive library of feature films, documentaries, TV shows, anime, award-wining Netflix originals, and more. Watch as much as you want, anytime you want.</p>
      <button className="btn">join now</button>
    </div>
    </div>
  );
}

export default Home;
