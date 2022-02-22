import React from "react";

import pizzaVideo from "../../assets/videos/pizza.mp4";
import { Link } from "react-router-dom";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <video
        autoplay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={pizzaVideo} type="video/mp4" />
      </video>
      <div className="headerContainer">
        <h1>Pizza Place</h1>
        <p>Just Eat It</p>
        <Link to="/menu">
          <button>Oreder Now !</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
