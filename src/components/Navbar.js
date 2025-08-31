import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Custom class name function for NavLink
  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className="logo" onClick={closeMenu}>
              <img
                src="/images/Logo.svg"
                alt="Little Lemon Logo"
                className="nav-logo"
                width="180"
                height="50"
              />
            </NavLink>
            <button
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              aria-controls="main-navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            id="main-navigation"
            className={`nav-links ${isOpen ? "active" : ""}`}
          >
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reservations"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/order-online"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`nav-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
        role="presentation"
      />
    </>
  );
};

export default Navbar;
