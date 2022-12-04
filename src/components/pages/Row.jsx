import React, { useState } from "react";
import {
  released,
  dramas,
  action,
  bollywood,
  news,
  actions,
  acclaimed,
  adventure,
  african,
  exciting,
  favorites,
  books,
  critically,
  suspense,
  crime,
  romance,
  blockbuster,
} from "../../data";
import Cards from "./Cards";

function Row() {
  const [movies, setMovies] = useState(released);
  const [film, setFilm] = useState(dramas);
  const [popular, setPopular] = useState(action);
  const [asian, setAsian] = useState(bollywood);
  const [newest, setNewest] = useState(news);
  const [rated, setRated] = useState(actions);
  const [mostRated, setMostRated] = useState(acclaimed);
  const [topRated, setTopRated] = useState(adventure);
  const [local, setLocal] = useState(african);
  const [fun, setFun] = useState(exciting);
  const [highRated, setHighRated] = useState(favorites);
  const [history, setHistory] = useState(books);
  const [thriller, setThriller] = useState(critically);
  const [interest, setInterest] = useState(suspense);
  const [trend, setTrend] = useState(crime);
  const [trending, setTrending] = useState(romance);
  const [mostTrending, setMostTrending] = useState(blockbuster);

  return (
    <div className="rows">
      <Cards movie={movies} title="Released in the Past Year" />
      <Cards movie={film} title="Dramas" />
      <Cards movie={popular} title="Action Movies" />
      <Cards movie={asian} title="Bollywood Movies" />
      <Cards movie={newest} title="New Releases" />
      <Cards movie={rated} title="Get In On the Action" />
      <Cards movie={mostRated} title="Acclaimed Writers" />
      <Cards movie={topRated} title="Action & Adventure" />
      <Cards movie={local} title="African Movies & TV" />
      <Cards movie={fun} title="Exciting Movies" />
      <Cards movie={highRated} title="Familiar Favorites" />
      <Cards movie={history} title="Dramas Based on Books" />
      <Cards movie={thriller} title="Critically Acclaimed Films" />
      <Cards movie={interest} title="Suspenseful Movies" />
      <Cards movie={trend} title="Crime" />
      <div className="backdrop">
        <Cards movie={trending} title="Romance" />
      </div>
      <div className="backdrop-1">
        <Cards className="blur" movie={mostTrending} title="Blockbuster" />
      </div>
    </div>
  );
}

export default Row;
