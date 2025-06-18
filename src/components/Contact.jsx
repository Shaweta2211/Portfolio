import React from 'react';
import '../assets/css/style.css';

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-section">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new projects or collaborations.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:shawetapan2211@gmail.com">shawetapan2211@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+917807828416">+91-7807828416</a></p>
            <p><strong>Address:</strong> India</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shaweta-sharma22" target="_blank" rel="noopener noreferrer">linkedin.com/in/shawetasharma</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Shaweta2211" target="_blank" rel="noopener noreferrer">github.com/shawetasharma</a></p>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h3>Message</h3>
            <form className="contact-form">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email address" required />
              <textarea rows="4" placeholder="Type Message" required></textarea>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
