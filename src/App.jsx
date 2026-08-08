
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";


/* =========================================================
   PARADISE NURSERY LANDING PAGE
   ========================================================= */

function Home() {

  return (

    <main className="home-page">


      {/* =====================================================
          DECORATIVE BACKGROUND ELEMENTS
          ===================================================== */}

      <div className="leaf leaf-one">
        🌿
      </div>

      <div className="leaf leaf-two">
        🍃
      </div>

      <div className="leaf leaf-three">
        🌱
      </div>


      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="landing-navbar">

        <Link
          to="/"
          className="brand"
        >

          <span className="brand-icon">
            🌿
          </span>

          <span className="brand-name">
            Paradise Nursery
          </span>

        </Link>


        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart">
            🛒 Cart
          </Link>

        </div>

      </nav>


      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section
        className="hero-section"
        id="home"
      >

        <div className="hero-overlay">

          <div className="hero-content">


            <span className="welcome-badge">
              🌱 GROW • NURTURE • BLOOM
            </span>


            <h1>

              Bring Nature

              <span>
                Into Your Home
              </span>

            </h1>


            <p className="hero-description">

              Welcome to{" "}

              <strong>
                Paradise Nursery
              </strong>

              , your online destination for
              beautiful, healthy, and carefully
              selected plants.

            </p>


            <p className="hero-subtext">

              Discover plants that transform your
              space into a peaceful, refreshing
              paradise.

            </p>


            {/* GET STARTED */}

            <Link
              to="/plants"
              className="get-started-button"
            >

              <span>
                Get Started
              </span>

              <span className="button-arrow">
                →
              </span>

            </Link>


            {/* =================================================
                FEATURE HIGHLIGHTS
                ================================================= */}

            <div className="feature-row">


              <div className="feature-item">

                <span className="feature-icon">
                  🌱
                </span>

                <div>

                  <strong>
                    Healthy Plants
                  </strong>

                  <small>
                    Carefully selected
                  </small>

                </div>

              </div>


              <div className="feature-item">

                <span className="feature-icon">
                  🪴
                </span>

                <div>

                  <strong>
                    Beautiful Choices
                  </strong>

                  <small>
                    For every space
                  </small>

                </div>

              </div>


              <div className="feature-item">

                <span className="feature-icon">
                  💚
                </span>

                <div>

                  <strong>
                    Plant With Love
                  </strong>

                  <small>
                    Grow with us
                  </small>

                </div>

              </div>


            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PLANTS PREVIEW
          ===================================================== */}

      <section
        className="plants-preview"
        id="plants-section"
      >

        <div className="preview-content">

          <span>
            🌿
          </span>

          <h2>
            Ready to Grow?
          </h2>

          <p>
            Explore our beautiful collection of
            plants and find the perfect green
            companion for your space.
          </p>


          <Link
            to="/plants"
            className="get-started-button"
          >

            <span>
              Explore Plants
            </span>

            <span className="button-arrow">
              →
            </span>

          </Link>

        </div>

      </section>


    </main>

  );
}


/* =========================================================
   MAIN APP
   ========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* PLANTS */}

        <Route
          path="/plants"
          element={<ProductList />}
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<AboutUs />}
        />


        {/* CART */}

        <Route
          path="/cart"
          element={<Cart />}
        />


      </Routes>

    </BrowserRouter>

  );
}


export default App;

