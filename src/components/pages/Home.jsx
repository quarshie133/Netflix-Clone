import React from "react";
import "../styles/Home.css";
import Row from "../pages/Row";
import Footer from "../layout/Footer";

function Home() {
  return (
    <div className="homepage">
      <div className="text-section">
        <h1>Movies</h1>
        <p>
          <span className="content1">
            Movies move us like nothing else can, whether they're scary, funny,
          </span>
          dramatic, romantic or anywhere in-between. So many titles, so much{" "}
          <span className="content2">to experience.</span>
        </p>
      </div>
      <div className="container-fluid movie-app">
        <div className="row">
          <Row />
        </div>
      </div>
      <div className="container-fluid p-1 text-center card-section">
        <div className="text-center">
          <h2 className="footer-text p-1 fs-2 ">There's even more to watch.</h2>
          <p className="text-center inner-text fs-5 p-1">
            <span className="content1">
              Nextflix has an extensive library of feature films, documentaries,
              TV
            </span>
            shows, anime, award-wining Netflix originals, and more. Watch as
            <span className="content2">
              much as you want, anytime you want.
            </span>
          </p>
          <button className="bottom-btn">join now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
