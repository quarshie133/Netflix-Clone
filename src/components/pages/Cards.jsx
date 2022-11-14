import React from "react";
import "../styles/Cards.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

function Cards({ movie, title }) {
  // const [trailerUrl, setTrailerUrl] = useState();


  return (
    <div className="row">
      <h6>{title}</h6>
      <div className="row__posters">
        {movie.map((movies) => {
          const { Title, Year, imdbID, Type, Poster } = movies;
          return (
            <div key={imdbID}>
              <img
                // onClick={() => handleClick(movie)}
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
