import React from 'react';
import "./About.css";

const Aboutus = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      role: "Founder & CEO", 
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&auto=format&fit=crop&q=60" 
    },
    { 
      id: 2, 
      name: "Sarah Williams", 
      role: "Lead Developer", 
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&q=60" 
    },
    { 
      id: 3, 
      name: "Michael Chen", 
      role: "UI/UX Designer", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=60" 
    },
    { 
      id: 4, 
      name: "Priya Patel", 
      role: "Marketing Director", 
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&auto=format&fit=crop&q=60" 
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">Our Story</h1>
        
        <p className="about-paragraph">
          Founded in 2018, we started as a small team of three passionate developers in a garage. 
          Today, we've grown into a full-service digital agency with over 50 employees serving 
          clients worldwide.
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>To empower businesses through innovative technology solutions that drive growth, efficiency, and exceptional user experiences.</p>
          </div>
          
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>To become the most trusted digital partner for companies looking to transform their ideas into impactful digital products.</p>
          </div>
          
          <div className="about-card">
            <h3>Our Values</h3>
            <p>Innovation, Integrity, Collaboration, and Excellence guide everything we do.</p>
          </div>
        </div>
        
        <h2 className="about-subheading">What Sets Us Apart</h2>
        <p className="about-paragraph">
          We combine technical expertise with creative thinking to deliver solutions that are not just 
          functional but delightful to use. Our agile approach ensures we adapt quickly to your needs 
          while maintaining the highest quality standards.
        </p>
        
        <h2 className="about-subheading">Meet Our Team</h2>
        <p className="about-paragraph">
          Our diverse team brings together top talent from around the world, united by a shared passion 
          for creating exceptional digital experiences.
        </p>
        
        <div className="about-team">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="team-avatar"
                loading="lazy"
              />
              <h4 className="team-name">{member.name}</h4>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;