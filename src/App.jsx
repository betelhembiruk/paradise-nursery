
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    const plantsSection = document.getElementById("plants-section");

    if (plantsSection) {
      plantsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="landing-page">
      {/* Background decorative elements */}
      <div className="leaf leaf-one">🌿</div>
      <div className="leaf leaf-two">🍃</div>
      <div className="leaf leaf-three">🌱</div>

      {/* Navigation */}
      <nav className="landing-navbar">
        <div className="brand">
          <span className="brand-icon">🌿</span>
          <span className="brand-name">Paradise Nursery</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#plants-section">Plants</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="welcome-badge">
              🌱 GROW • NURTURE • BLOOM
            </span>

            <h1>
              Bring Nature
              <span> Into Your Home</span>
            </h1>

            <p className="hero-description">
              Welcome to <strong>Paradise Nursery</strong>, your online
              destination for beautiful, healthy, and carefully selected
              plants.
            </p>

            <p className="hero-subtext">
              Discover plants that transform your space into a peaceful,
              refreshing paradise.
            </p>

            <button
              className="get-started-button"
              onClick={handleGetStarted}
            >
              <span>Get Started</span>
              <span className="button-arrow">→</span>
            </button>

            {/* Feature Highlights */}
            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <div>
                  <strong>Healthy Plants</strong>
                  <small>Carefully selected</small>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🪴</span>
                <div>
                  <strong>Beautiful Choices</strong>
                  <small>For every space</small>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">💚</span>
                <div>
                  <strong>Plant With Love</strong>
                  <small>Grow with us</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small section used by the Get Started button */}
      <section className="plants-preview" id="plants-section">
        <div className="preview-content">
          <span>🌿</span>
          <h2>Ready to Grow?</h2>
          <p>
            Explore our beautiful collection of plants and find the perfect
            green companion for your space.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;

