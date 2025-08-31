import React from "react";
import { Link } from "react-router-dom";
import "./Highlights.css";

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/images/greek salad.jpg",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/images/bruchetta.svg",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/images/lemon dessert.jpg",
  },
];

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="container">
        <header className="highlights-header">
          <h2>This Week's Specials</h2>
          <Link to="/menu" className="menu-button">
            Online Menu
          </Link>
        </header>

        <div className="specials-grid">
          {specials.map((item) => (
            <article key={item.id} className="special-card">
              <figure className="special-image">
                <img src={item.image} alt={item.name} />
              </figure>
              <div className="special-content">
                <header className="special-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </header>
                <p>{item.description}</p>
                <footer className="special-footer">
                  <Link to="/order-online" className="order-button">
                    Order for Delivery
                  </Link>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
