const User = require('../models/userModel');

// Get all users (API endpoint)
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single user (API endpoint)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      jobTitle: req.body.job_title
    });
    res.redirect('/');
  } catch (err) {
    // Better error handling for duplicate email or validation errors
    if (err.code === 11000) {
      return res.status(400).render('form', { 
        error: 'Email already exists',
        formData: req.body // To repopulate the form
      });
    }
    res.status(500).render('form', { 
      error: 'Server error',
      formData: req.body
    });
  }
};

// Render edit form
exports.renderEditForm = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).redirect('/');
    }
    res.render('editForm', { user });
  } catch (err) {
    res.status(500).redirect('/');
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        jobTitle: req.body.job_title
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedUser) {
      return res.status(404).redirect('/');
    }
    res.redirect('/');
  } catch (err) {
    if (err.code === 11000) {
      // Handle duplicate email error
      const user = await User.findById(req.params.id);
      return res.status(400).render('editForm', {
        user: { ...user.toObject(), ...req.body }, // Merge existing with updates
        error: 'Email already exists'
      });
    }
    res.status(500).redirect('/');
  }
};

// Delete user (missing in your original)
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Render home page
exports.renderHome = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.render('home', { allusers: allUsers });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load users' });
  }
};

// Render form page
exports.renderForm = (req, res) => {
  res.render('form', { formData: null, error: null });
};