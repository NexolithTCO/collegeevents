import React, { useState } from 'react';

function Events() {
  const [registeredEvent, setRegisteredEvent] = useState(null);

  const eventsList = [
    {
      id: 1,
      title: 'Hackathon 2026',
      type: 'Technical',
      bannerClass: 'banner-hackathon',
      icon: '💻',
      date: 'October 15-16, 2026',
      venue: 'Main Computer Labs (Block C)',
      description: 'A 24-hour intensive coding marathon to solve real-world industry problems using modern technologies, AI, and cloud tools.',
    },
    {
      id: 2,
      title: 'Annual Sports Day',
      type: 'Athletics',
      bannerClass: 'banner-sports',
      icon: '🏃‍♂️',
      date: 'November 05, 2026',
      venue: 'University Stadium Ground',
      description: 'Join the annual inter-department track and field events, football, basketball, and cricket tournaments. Cheer for your branch!',
    },
    {
      id: 3,
      title: 'Cultural Fest - "Rhythm"',
      type: 'Cultural',
      bannerClass: 'banner-cultural',
      icon: '🎨',
      date: 'December 10-12, 2026',
      venue: 'Open Air Auditorium',
      description: 'A 3-day extravaganza of music concerts, classical and western dance battles, fashion shows, drama, and food stalls.',
    },
  ];

  const handleRegister = (title) => {
    setRegisteredEvent(title);
    setTimeout(() => {
      alert(`🎉 Registration successful for ${title}! Check your student email for confirmation details.`);
    }, 50);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Upcoming Events</h1>
        <p>Explore upcoming events and register to participate!</p>
      </div>

      <div className="events-grid">
        {eventsList.map((event) => (
          <div key={event.id} className="event-card">
            <div className={`event-banner ${event.bannerClass}`}>
              <span>{event.icon}</span>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-meta">
                <div className="meta-item">
                  <strong>📅 Date:</strong> {event.date}
                </div>
                <div className="meta-item">
                  <strong>📍 Venue:</strong> {event.venue}
                </div>
                <div className="meta-item">
                  <strong>🏷️ Category:</strong> {event.type}
                </div>
              </div>

              <button 
                className="btn-card"
                onClick={() => handleRegister(event.title)}
              >
                {registeredEvent === event.title ? '✓ Registered' : 'Register Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
