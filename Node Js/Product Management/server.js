const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/inventory')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Home message
app.get('/', (req, res) => {
  res.send('🛍️ Welcome to the Product Management System API!');
});

// Product routes
app.use('/products', productRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});