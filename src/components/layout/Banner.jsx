import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../request";

export default function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url(https://res.cloudinary.com/ephraim/image/upload/v1667261114/netflix/films/children/spirited-away/small_jbdrit.jpg)",
        backgroundPosition: "center",
      }}
    >
  <div className="banner__contents">
      

  </div>

    </header>
  );
}
