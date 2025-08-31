import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Highlights />
                <Testimonials />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/menu"
            element={
              <div className="page-container">
                <h1>Our Menu</h1>
              </div>
            }
          />
          <Route
            path="/reservations"
            element={
              <div className="page-container">
                <h1>Reservations</h1>
              </div>
            }
          />
          <Route
            path="/order-online"
            element={
              <div className="page-container">
                <h1>Order Online</h1>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="page-container">
                <h1>Login</h1>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="page-container">
                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
