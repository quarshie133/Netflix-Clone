import React from "react";
import "../styles/Cards.css";

function Cards({ movie, title }) {


  return (
    <div className="row">
      <h6>{title}</h6>
      <div className="row__posters">
        {movie.map((movies) => {
          const { Title, Year, imdbID, Type, Poster } = movies;
          return (
            <div key={imdbID}>
              <img
                className="row__poster"
                src={Poster}
                alt={Title}
              />
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Cards;
