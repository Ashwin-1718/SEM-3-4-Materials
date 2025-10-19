const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    gender: String,
    jobTitle: String
});

module.exports = mongoose.model('ejs', userSchema);