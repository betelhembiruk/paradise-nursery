
import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-tag">🌿 ABOUT US</span>
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            Bringing nature closer to you, one beautiful plant at a time.
          </p>
        </div>

        <div className="about-content">
          <div className="about-box">
            <div className="about-icon">🌱</div>
            <h2>Who We Are</h2>
            <p>
              Paradise Nursery is an online plant shop created for people who
              love nature and want to bring more greenery into their homes and
              workspaces.
            </p>
          </div>

          <div className="about-box">
            <div className="about-icon">🪴</div>
            <h2>What We Offer</h2>
            <p>
              We offer a carefully selected collection of beautiful indoor and
              outdoor plants for beginners, experienced plant lovers, and
              everyone in between.
            </p>
          </div>

          <div className="about-box">
            <div className="about-icon">💚</div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to make choosing and purchasing plants simple,
              enjoyable, and accessible while helping you create a healthier
              and greener space.
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <h2>Grow With Us 🌿</h2>
          <p>
            Whether you're adding your first plant or growing your own indoor
            jungle, Paradise Nursery is here to make your plant journey
            beautiful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

