import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can connect to an API here)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact__hero">
        <div className="hero__content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact__content">
        {/* Contact Information */}
        <div className="contact__info">
          <div className="info__card">
            <div className="info__icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Location</h3>
            <p>123 Commerce Street, Tech City, TC 10001</p>
          </div>

          <div className="info__card">
            <div className="info__icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Phone Number</h3>
            <p>+1 (123) 456-7890</p>
            <p>Mon-Fri: 9am-6pm EST</p>
          </div>

          <div className="info__card">
            <div className="info__icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Address</h3>
            <p>support@ecommerce.com</p>
            <p>sales@ecommerce.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <div className="form__group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form__submit">Send Message</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="contact__faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq__grid">
          {[
            {
              question: "What are your shipping options?",
              answer: "We offer standard (3-5 business days) and express (1-2 business days) shipping."
            },
            {
              question: "How can I track my order?",
              answer: "You'll receive a tracking number via email once your order ships."
            },
            {
              question: "What is your return policy?",
              answer: "We accept returns within 30 days of purchase with original receipt."
            },
            {
              question: "Do you ship internationally?",
              answer: "Yes, we ship to most countries worldwide with additional fees."
            }
          ].map((item, index) => (
            <div key={index} className="faq__item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}