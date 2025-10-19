const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  },
  Year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);