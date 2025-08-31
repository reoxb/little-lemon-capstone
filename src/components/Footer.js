import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <section className="footer-section">
            <img
              src="/images/Logo.svg"
              alt="Little Lemon Logo"
              className="footer-logo"
              width="200"
              height="60"
            />
            <p>
              Bringing the authentic taste of the Mediterranean to Chicago since
              1995.
            </p>
          </section>

          <section className="footer-section">
            <h3>Navigation</h3>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                  <Link to="/order-online">Order Online</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </section>

          <section className="footer-section">
            <h3>Contact</h3>
            <address>
              <p>
                <FaMapMarkerAlt className="icon" /> 123 Lemon Street, Chicago,
                IL 60601
              </p>
              <p>
                <FaPhone className="icon" /> Phone: (312) 555-1234
              </p>
              <p>
                <FaEnvelope className="icon" /> Email: info@littlelemon.com
              </p>
            </address>
          </section>

          <section className="footer-section">
            <h3>Opening Hours</h3>
            <ul className="opening-hours">
              <li>
                <span>Monday - Friday:</span> 11:00 AM - 10:00 PM
              </li>
              <li>
                <span>Saturday:</span> 10:00 AM - 11:00 PM
              </li>
              <li>
                <span>Sunday:</span> 10:00 AM - 9:00 PM
              </li>
            </ul>
          </section>

          <section className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
