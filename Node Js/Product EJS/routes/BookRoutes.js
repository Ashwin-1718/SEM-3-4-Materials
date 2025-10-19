const express = require('express');
const router = express.Router();
const controller = require('../controllers/BookController');

router.get('/books', controller.getbooks);
router.get('/add', controller.showAddForm);
router.post('/add', controller.addbook);
router.get('/edit/:id', controller.showEditForm);
router.post('/edit/:id', controller.updatebook);
router.get('/delete/:id', controller.deletebook);

module.exports = router;
