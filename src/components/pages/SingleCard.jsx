import React, { useState } from 'react';
import items from "../../data";
import Cards from "../pages/Cards"

function SingleCard( { movie }) {

    const [ movies, setMovies ] = useState(items);
  return (
    <div>
      <Cards movie={movies} title="Released in the Past Year" />
      <Cards movie={movies} title="Dramas" />
      <Cards movie={movies} title="Action Movies" />
      <Cards movie={movies} title="Bollywood Movies" />
      <Cards movie={movies} title="New Releases" />
      <Cards movie={movies} title="Get In On the Action" />
      <Cards movie={movies} title="Acclaimed Writers" />
      <Cards movie={movies} title="Action & Adventure" />
      <Cards movie={movies} title="African Movies & TV" />
      <Cards movie={movies} title="Exciting Movies" />
      <Cards movie={movies} title="Familiar Favorites" />
      <Cards movie={movies} title="Dramas Based on Books" />
      <Cards movie={movies} title="Critically Acclaimed Films" />
      <Cards movie={movies} title="Suspenseful Movies" />
    </div>
  );
}

export default SingleCard