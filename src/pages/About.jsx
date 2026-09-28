import React from 'react';

function About() {
  return (
    <div>
      <div className="page-header">
        <h1>About College Events</h1>
        <p>Your one-stop destination for everything happening around campus.</p>
      </div>

      <div className="about-card">
        <h2>Our Mission</h2>
        <p>
          The College Events Portal is designed to keep students, faculty, and visitors updated with all campus activities. From hackathons and tech symposiums to annual athletic meets and cultural galas, our mission is to foster student engagement and active participation.
        </p>
        <p>
          This website was built as part of <strong>Advanced Web Technology Lab - Experiment 9</strong> to demonstrate modern single-page web architecture, client-side routing with React Router, and reliable automated static hosting using GitHub Pages.
        </p>

        <h2 style={{ marginTop: '1.5rem' }}>Key Highlights</h2>
        <ul className="features-list">
          <li>⚡ <strong>Fast &amp; Responsive:</strong> Built with React and Vite for optimal speed and responsiveness.</li>
          <li>🧭 <strong>Seamless Client-Side Routing:</strong> Implemented using React Router DOM with HashRouter.</li>
          <li>🚀 <strong>Static Cloud Deployment:</strong> Hosted and served globally on GitHub Pages.</li>
          <li>🌐 <strong>Custom Domain Ready:</strong> Configured for custom domain registration and DNS mapping.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
