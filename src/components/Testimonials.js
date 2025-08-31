import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John D.",
    rating: 5,
    image: "/images/restaurant.jpg",
    review:
      "The Greek salad was absolutely delicious! The best I've had outside of Greece. Will definitely be coming back!",
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 4,
    image: "/images/restaurant chef B.jpg",
    review:
      "Great atmosphere and even better food. The bruschetta is a must-try!",
  },
  {
    id: 3,
    name: "Michael T.",
    rating: 5,
    image: "/images/Mario and Adrian A.jpg",
    review:
      "Exceptional service and the lemon dessert was to die for. Highly recommend!",
  },
  {
    id: 4,
    name: "Emily R.",
    rating: 5,
    image: "/images/Mario and Adrian b.jpg",
    review:
      "Authentic Mediterranean flavors in the heart of the city. A true gem!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <header className="section-header">
          <h2>Testimonials</h2>
        </header>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div
                className="testimonial-rating"
                aria-label={`Rating: ${testimonial.rating} out of 5`}
              >
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < testimonial.rating ? "star filled" : "star"}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="testimonial-content">
                <figure className="testimonial-image">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                  />
                </figure>
                <h3>{testimonial.name}</h3>
                <blockquote>
                  <p>{testimonial.review}</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
