'use client';

import React, { useState } from 'react';
import Heading from './Heading';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa6';
import '../style/contact.css';  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: { target: { id: string; value: unknown; }; }) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Failed to send the message. Please try again.');
    }
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        {/* Contact Info */}
        <div>
        <Heading title="Get In Touch" />
          <p className="contact-text">
            Give me a call or leave your message here by submitting this form.
          </p>
          <div className="contact-item" data-aos="zoom-in">
            <AiTwotoneMail className="contact-icon" />
            hubabikram@gmail.com
          </div>
          <div className="contact-item" data-aos="zoom-in" >
            <FaPhone className="contact-icon" />
            0322-0000596
          </div>
        </div>

        {/* Contact Form */}

        <form onSubmit={handleSubmit} className="contact-form">
  <div>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      value={formData.message}
      onChange={handleChange}
      rows={6}
      required
    ></textarea>
  </div>

  <button type="submit" className="contact-button">
    SEND MESSAGE
  </button>

  {status && (
    <p
      className={`feedback-message ${
        status.includes("successfully") ? "feedback-success" : "feedback-error"
      }`}
    >
      {status}
    </p>
  )}
</form>

      </div>
    </div>
  );
};

export default Contact;
