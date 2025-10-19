const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.get('/', (req, res) => {
  res.send('Welcome to the School Management System API!');
});

app.use('/students', studentRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});