import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Based in Chicago, Illinois, Little Lemon is a family-owned
              Mediterranean restaurant, focused on traditional recipes served
              with a modern twist. The chefs draw inspiration from Italian,
              Greek, and Turkish culture and have a menu of 12-15 items that
              they rotate seasonally.
            </p>
            <p>
              The restaurant has a rustic and relaxed atmosphere with moderate
              noise, perfect for casual dining with friends and family. The
              restaurant is owned by two Italian brothers, Mario and Adrian, who
              moved to the United States to pursue their shared dream of owning
              a restaurant.
            </p>
          </div>
          <div className="about-images">
            <div className="image-container image-1">
              <img
                src="/images/restaurant.jpg"
                alt="Little Lemon restaurant interior"
                className="about-image"
              />
            </div>
            <div className="image-container image-2">
              <img
                src="/images/Mario and Adrian A.jpg"
                alt="Chefs Mario and Adrian"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
