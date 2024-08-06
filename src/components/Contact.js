// src/components/Contact.js
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact" style={{ padding: '20px' }}>
        <h2>Contact Me</h2>
        <p>
          Email: <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile/">https://www.linkedin.com/in/your-linkedin-profile/</a>
        </p>
      </section>
    );
  }
}

export default Contact;
