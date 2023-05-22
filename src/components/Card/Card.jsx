import React from "react";
import "./Card.css";
import Navbar from "../Navbar/Navbar";

const Card = () => {
  return (
    <section className="container">
      {/* Left Side */}
      <Navbar />
      <div className="container-card-left">
        <h1>Make your party fun!</h1>
        <p className="card-paragraph">Create your own custom playlist today.</p>
        <button className="create-button">Create playlist</button>
      </div>
    </section>
  );
};

export default Card;
