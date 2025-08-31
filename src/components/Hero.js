import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations" className="cta-button">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="/images/restaurant.jpg"
              alt="Delicious food from Little Lemon"
              className="hero-food"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
