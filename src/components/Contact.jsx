import React, { useState } from 'react';
import '../assets/css/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-section">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new projects or collaborations.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:shawetapan2211@gmail.com">shawetapan2211@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shaweta-sharma22" target="_blank" rel="noopener noreferrer">linkedin.com/in/shawetasharma</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Shaweta2211" target="_blank" rel="noopener noreferrer">github.com/shawetasharma</a></p>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h3>Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Type Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
