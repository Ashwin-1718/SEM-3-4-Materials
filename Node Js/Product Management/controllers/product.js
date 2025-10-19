// const Product = require('../models/product');

// // Get all products
// exports.getProducts = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } 
//     catch (err) {
//         res.status(500).json({ message: 'Error fetching products' });
//     }
// };

// // Add new product
// exports.addProduct = async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         const saved = await product.save();
//         res.status(201).json(saved);
//     } 
//     catch (err) {
//         res.status(400).json({ message: 'Failed to add product', error: err.message });
//     }
// };

// // Update product
// exports.updateProduct = async (req, res) => {
//     try {
//         const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updated) return res.status(404).json({ message: 'Product not found' });
//         res.json(updated);
//     } 
//     catch (err) {
//         res.status(400).json({ message: 'Failed to update product', error: err.message });
//     }
// };

// // Delete product
// exports.deleteProduct = async (req, res) => {
//     try {
//         const deleted = await Product.findByIdAndDelete(req.params.id);
//         if (!deleted) return res.status(404).json({ message: 'Product not found' });
//         res.json({ message: 'Product deleted successfully' });
//     } 
//     catch (err) {
//         res.status(500).json({ message: 'Failed to delete product', error: err.message });
//     }
// };


const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// Add a new product
exports.addProduct = async (req, res) => {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updated);
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
};
