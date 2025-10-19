const mongoose = require('mongoose');
const express = require('express');
const app = express();
const productRoutes = require('./routes/BookRoutes');

mongoose.connect('mongodb://localhost:27017/Product-EJS')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Product Management System');
  console.log('Home route accessed');
});

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/', productRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));