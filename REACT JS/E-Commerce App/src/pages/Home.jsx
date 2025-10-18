import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    rating: 4.7
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 129.99,
    image: "https://www.portronics.com/cdn/shop/files/Portronics_TriFusion_portable_bluetooth_speaker_with_digital_alarm_clock.jpg?v=1741262388",
    fallbackImage: "https://via.placeholder.com/300/0000FF/FFFFFF?text=No+Image",
    rating: 4.5
  }
  
];

const categories = [
  {
    name: "Electronics",
    image: "https://img.freepik.com/premium-photo/futuristic-gadgets-showcasing-advanced-tech-minimalistic-design_1247965-95065.jpg"
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover Premium Products</h1>
            <p>Curated collection for your modern lifestyle</p>
            <div className="hero-buttons">
              <Link to="/products" className="shop-now-btn">Shop Now</Link>
              <Link to="/sale" className="explore-btn">Explore Deals</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Our most popular items this season</p>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-badge">Bestseller</div>
                <Link to={`/products/${product.id}`} className="product-link">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="quick-view">Quick View</div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <span className="stars">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="rating-count">({Math.floor(product.rating * 20)} reviews)</span>
                    </div>
                    <div className="price-container">
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      <span className="original-price">${(product.price * 1.2).toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
                <button className="add-to-cart-btn">
                  <span className="cart-icon">🛒</span> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find what you're looking for</p>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link to={`/products?category=${category.name.toLowerCase()}`} key={index} className="category-card">
                <div className="category-image-container">
                  <img src={category.image} alt={category.name} className="category-image" />
                  <div className="category-overlay"></div>
                </div>
                <h3>{category.name}</h3>
                <p className="shop-link">Shop Now →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">
            <span className="promo-tag">Limited Time</span>
            <h2>Summer Sale Event</h2>
            <p>Up to 50% off on selected items. Don't miss out!</p>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-number">02</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">12</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">45</span>
                <span className="countdown-label">Minutes</span>
              </div>
            </div>
            <Link to="/products/sale" className="shop-sale-btn">Shop the Sale</Link>
          </div>
          <div className="promo-image">
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Summer Sale" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Customer Stories</h2>
          <p className="section-subtitle">What our customers say about us</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">“</div>
                <p className="testimonial-text">The quality of products exceeded my expectations. Shipping was incredibly fast!</p>
                <div className="customer-info">
                  <img src="https://i.pinimg.com/736x/46/6b/ee/466bee8721d70384b99041c0b108339f.jpg" alt="Virat Kohli" className="customer-avatar" />
                  <div className="customer-details">
                    <h4>Virat Kohli</h4>
                    <p className="customer-location">Mumbai, India</p>
                    <div className="customer-rating">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">“</div>
                <p className="testimonial-text">Excellent customer service! They helped me find exactly what I was looking for.</p>
                <div className="customer-info">
                  <img src="https://i.pinimg.com/236x/d7/0b/e4/d70be4a7c02b733e57a6bac0a5133134.jpg" alt="MS Dhoni" className="customer-avatar" />
                  <div className="customer-details">
                    <h4>MS Dhoni</h4>
                    <p className="customer-location">Ranchi, India</p>
                    <div className="customer-rating">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}