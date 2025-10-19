const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employee');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/company')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));


app.get('/', (req, res) => {
  res.send(' Welcome to the Employee Management System API!');
});


app.use('/employee', employeeRoutes);


app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});