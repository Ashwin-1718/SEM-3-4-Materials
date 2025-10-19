const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    },
    category: {
        type: String,
        required: true
    },
    instock: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
