import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      {/* Hero Section with Parallax Effect */}
      <section className="about__hero">
        <div className="hero__overlay">
          <h1 className="hero__title">Our Story</h1>
          <p className="hero__subtitle">Building the future of e-commerce, one customer at a time</p>
        </div>
      </section>

      <div className="about__container">
        {/* Mission Section */}
        <section className="about__mission">
          <div className="mission__content">
            <div className="mission__text">
              <h2 className="section__title">Our Mission</h2>
              <p className="section__description">
                We're dedicated to providing high-quality products with exceptional 
                customer service. Our goal is to make online shopping effortless, 
                enjoyable, and accessible to everyone.
              </p>
              <div className="mission__values">
                <div className="value__card">
                  <div className="value__icon">💎</div>
                  <h3>Quality</h3>
                  <p>Curated selection of premium products</p>
                </div>
                <div className="value__card">
                  <div className="value__icon">🤝</div>
                  <h3>Integrity</h3>
                  <p>Honest business practices always</p>
                </div>
                <div className="value__card">
                  <div className="value__icon">🚀</div>
                  <h3>Innovation</h3>
                  <p>Constantly improving your experience</p>
                </div>
              </div>
            </div>
            <div className="mission__image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our team working together" 
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about__team">
          <div className="section__header">
            <h2 className="section__title">Meet The Team</h2>
            <p className="section__subtitle">The passionate people behind our success</p>
          </div>
          <div className="team__grid">
            {[
              { 
                name: 'Virat Kohli', 
                role: 'Founder & CEO', 
                img: 'https://i.pinimg.com/736x/46/6b/ee/466bee8721d70384b99041c0b108339f.jpg',
                bio: 'Visionary leader with 10+ years in e-commerce'
              },
              { 
                name: 'MS Dhoni', 
                role: 'Product Manager', 
                img: 'https://i.pinimg.com/236x/d7/0b/e4/d70be4a7c02b733e57a6bac0a5133134.jpg',
                bio: 'Expert in curating the best products for you'
              },
              { 
                name: 'Rohit Sharma', 
                role: 'Lead Developer', 
                img: 'https://i.pinimg.com/736x/28/57/3a/28573a7dda059f24e8d549b9cd317b76.jpg',
                bio: 'Builds the technology that powers your experience'
              },
              { 
                  name: 'Hardik Pandya', 
                role: 'Customer Support', 
                img: 'data:image/jpeg;base64,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',
                bio: 'Your friendly helper for any questions'
              }
            ].map((member, index) => (
              <div key={index} className="team__card">
                <div className="team__image">
                  <img src={member.img} alt={member.name} />
                  <div className="team__social">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <div className="team__info">
                  <h3>{member.name}</h3>
                  <p className="team__role">{member.role}</p>
                  <p className="team__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="about__stats">
          <div className="stats__container">
            <div className="stat__item">
              <div className="stat__number" data-count="10000">1500</div>
              <p className="stat__label">Happy Customers</p>
            </div>
            <div className="stat__item">
              <div className="stat__number" data-count="500">1100</div>
              <p className="stat__label">Quality Products</p>
            </div>
            <div className="stat__item">
              <div className="stat__number">24/7</div>
              <p className="stat__label">Customer Support</p>
            </div>
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="about__testimonials">
          <div className="section__header">
            <h2 className="section__title">What Our Customers Say</h2>
            <p className="section__subtitle">Hear from people who love our store</p>
          </div>
          <div className="testimonials__grid">
            {[
              {
                quote: "This is the best e-commerce experience I've had. Fast shipping and amazing products!",
                author: "Jamie Smith",
                rating: 5
              },
              {
                quote: "Customer service went above and beyond to help me. Highly recommended!",
                author: "Taylor Wilson",
                rating: 5
              },
              {
                quote: "Great quality products at reasonable prices. Will shop here again.",
                author: "Morgan Lee",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial__card">
                <div className="testimonial__rating">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial__quote">"{testimonial.quote}"</p>
                <p className="testimonial__author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}