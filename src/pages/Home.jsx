import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <span className="hero-badge">Campus Buzz</span>
        <h1 className="hero-title">College Events</h1>
        <p className="hero-subtitle">
          Welcome to the official College Events hub! Discover upcoming hackathons, athletic tournaments, and cultural celebrations happening across the campus.
        </p>
        <Link to="/events" className="btn-primary">
          Explore Upcoming Events &rarr;
        </Link>
      </section>

      <div className="highlights-grid">
        <div className="highlight-card">
          <div className="highlight-icon">💻</div>
          <h3>Technical Competitions</h3>
          <p>Sharpen your coding skills, build real projects, and compete for exciting cash prizes.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🏆</div>
          <h3>Sports Tournaments</h3>
          <p>Showcase teamwork and sportsmanship in intra and inter-college sporting matches.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🎭</div>
          <h3>Cultural Festivals</h3>
          <p>Celebrate music, dance, drama, and art with students from across institutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
