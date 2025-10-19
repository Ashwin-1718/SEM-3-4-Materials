const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/students', studentRoutes);

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
