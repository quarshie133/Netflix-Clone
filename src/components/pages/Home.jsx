import React, { useState }from "react";
import Cards from "./Cards";
import items from "../../data";
import "../styles/Home.css";

function Home() {
const [movies, setMovies] = useState(items)
const [name, setName] = useState("Released in the Past Year");
 
  

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
          <Cards movie={movies}
          title={name}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
