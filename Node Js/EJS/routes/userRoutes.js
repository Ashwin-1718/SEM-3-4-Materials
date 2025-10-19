const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Render routes
router.get('/', userController.renderHome);
router.get('/form', userController.renderForm);
router.get('/api/users/:id/edit', userController.renderEditForm); // Add this new route

// API routes
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.post('/api/users', userController.createUser);
router.delete('/api/users/:id', userController.deleteUser);
router.put('/api/users/:id', userController.updateUser); // Changed from patch to put

module.exports = router;