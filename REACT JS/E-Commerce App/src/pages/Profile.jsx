import React from "react";
import "./Profile.css";

export default function Profile() {
  const user = {
    name: "Ashwin Yadav",
    email: "AK@example.com",
    joinDate: "March 31, 2025",
    orders: 12,
    wishlistItems: 5,
    avatar: "https://i.pinimg.com/736x/46/6b/ee/466bee8721d70384b99041c0b108339f.jpg"
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <h1>My Account</h1>
      </div>
      
      <div className="profile__content">
        <div className="profile__sidebar">
          <div className="profile__avatar">
            <img src={user.avatar} alt="User avatar" />
            <button className="profile__avatar-edit">Edit Photo</button>
          </div>
          
          <nav className="profile__nav">
            <button className="profile__nav-item profile__nav-item--active">
              <i className="fas fa-user"></i> Profile
            </button>
            <button className="profile__nav-item">
              <i className="fas fa-shopping-bag"></i> Orders
            </button>
            <button className="profile__nav-item">
              <i className="fas fa-heart"></i> Wishlist
            </button>
            <button className="profile__nav-item">
              <i className="fas fa-map-marker-alt"></i> Addresses
            </button>
            <button className="profile__nav-item">
              <i className="fas fa-cog"></i> Settings
            </button>
          </nav>
        </div>
        
        <div className="profile__main">
          <div className="profile__card">
            <h2>Personal Information</h2>
            <div className="profile__info">
              <div className="profile__info-item">
                <span className="profile__info-label">Full Name</span>
                <span className="profile__info-value">{user.name}</span>
              </div>
              <div className="profile__info-item">
                <span className="profile__info-label">Email</span>
                <span className="profile__info-value">{user.email}</span>
              </div>
              <div className="profile__info-item">
                <span className="profile__info-label">Member Since</span>
                <span className="profile__info-value">{user.joinDate}</span>
              </div>
            </div>
            <button className="profile__edit-btn">Edit Profile</button>
          </div>
          
          <div className="profile__stats">
            <div className="profile__stat-card">
              <div className="profile__stat-icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="profile__stat-info">
                <span className="profile__stat-number">{user.orders}</span>
                <span className="profile__stat-label">Orders</span>
              </div>
            </div>
            
            <div className="profile__stat-card">
              <div className="profile__stat-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="profile__stat-info">
                <span className="profile__stat-number">{user.wishlistItems}</span>
                <span className="profile__stat-label">Wishlist Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}