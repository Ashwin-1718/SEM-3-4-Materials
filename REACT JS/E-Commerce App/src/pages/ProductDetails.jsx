import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const products = [
  { 
    id: 1, 
    name: "Premium Wireless Headphones", 
    price: 199.99, 
    description: "Experience crystal-clear sound with our noise-cancelling wireless headphones. Featuring 30-hour battery life and comfortable over-ear design.",
    features: [
      "Active Noise Cancellation",
      "30-hour playtime",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Foldable design"
    ],
    colors: ["Black", "Silver", "Blue"],
    images: [
    "https://assets.nikshanonline.com/wp-content/uploads/2024/10/a.jpg",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    rating: 4.5,
    reviews: 128
  },
  { 
    id: 2, 
    name: "Mechanical Gaming Keyboard", 
    price: 149.99, 
    description: "Professional-grade mechanical keyboard with RGB lighting and customizable macros for gamers and professionals alike.",
    features: [
      "Cherry MX switches",
      "RGB backlighting",
      "Anti-ghosting",
      "Braided cable",
      "Adjustable feet"
    ],
    colors: ["Black", "White"],
    images: [
      "https://m.media-amazon.com/images/I/71aARXewm6L.jpg",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    rating: 4.7,
    reviews: 86
  },
  { 
    id: 3, 
    name: "Smart Fitness Tracker", 
    price: 89.99, 
    description: "Track your workouts, heart rate, sleep patterns and more with our advanced fitness tracker with 1-week battery life.",
    features: [
      "Heart rate monitor",
      "Water resistant",
      "Sleep tracking",
      "7-day battery",
      "Smart notifications"
    ],
    colors: ["Black", "Pink", "Green"],
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    rating: 4.3,
    reviews: 215
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  if (!product) {
    return <div className="product-not-found">Product not found!</div>;
  }

  return (
    <div className="product-details">
      <div className="product-gallery">
        <div className="main-image">
          <img src={product.images[selectedImage]} alt={product.name} />
        </div>
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <div 
              key={index} 
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={img} alt={`${product.name} view ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        
        <div className="product-rating">
          <div className="stars">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="review-count">({product.reviews} reviews)</span>
        </div>

        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-features">
          <h3>Features:</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="color-options">
          <h3>Available Colors:</h3>
          <div className="color-buttons">
            {product.colors.map(color => (
              <button 
                key={color} 
                className="color-button"
                style={{ backgroundColor: color.toLowerCase() }}
                aria-label={color}
              />
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <h3>Quantity:</h3>
          <div className="quantity-controls">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart">Add to Cart - ${(product.price * quantity).toFixed(2)}</button>
      </div>
    </div>
  );
}