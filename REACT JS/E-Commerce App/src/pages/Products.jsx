import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const products = [
  { 
    id: 1, 
    name: "Premium Headphones", 
    price: 99.99, 
    category: "Electronics", 
    rating: 4.5,
    image: "https://assets.nikshanonline.com/wp-content/uploads/2024/10/a.jpg"
  },
  { 
    id: 2, 
    name: "Wireless Keyboard", 
    price: 49.99, 
    category: "Electronics", 
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/71aARXewm6L.jpg"
  },
  { 
    id: 3, 
    name: "Organic Cotton T-Shirt", 
    price: 24.99, 
    category: "Clothing", 
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  { 
    id: 4, 
    name: "Stainless Steel Water Bottle", 
    price: 19.99, 
    category: "Accessories", 
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  { 
    id: 5, 
    name: "Fitness Tracker", 
    price: 79.99, 
    category: "Electronics", 
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  { 
    id: 6, 
    name: "Leather Wallet", 
    price: 34.99, 
    category: "Accessories", 
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
];

export default function Products() {
  return (
    <div className="products">
      <h1 className="products__title">Our Products</h1>
      <div className="products__grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`} className="product-card__link">
              <div 
                className="product-card__image"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <span className="product-card__category">{product.category}</span>
                <div className="product-card__rating">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                  <span>({product.rating})</span>
                </div>
                <p className="product-card__price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <button className="product-card__add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}