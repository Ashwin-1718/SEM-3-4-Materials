const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override'); 
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/EJS')
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Mongo error', err));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); 

// Routes
app.use('/', userRoutes);

app.listen(3000, () => console.log('SERVER STARTED AT http://localhost:3000'));