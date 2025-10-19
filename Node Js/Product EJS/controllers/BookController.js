const book = require('../models/Book');
exports.getbooks = async (req, res) => {
  const books = await book.find();
  res.render('books', { books });
};

exports.showAddForm = (req, res) => {
  res.render('addbook');
};

exports.addbook = async (req, res) => {
  const { Title, Author, Year } = req.body;
  await book.create({ Title, Author, Year });
  res.redirect('/books');
};

exports.showEditForm = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('editbook', { book });
};

exports.updatebook = async (req, res) => {
  const { Title, Author, Year } = req.body;
  await book.findByIdAndUpdate(req.params.id, { Title, Author, Year });
  res.redirect('/books');
};

exports.deletebook = async (req, res) => {
  await book.findByIdAndDelete(req.params.id);
  res.redirect('/books');
};
