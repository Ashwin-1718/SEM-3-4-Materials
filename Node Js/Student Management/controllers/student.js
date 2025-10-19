// Simple Method
const Student = require('../models/Student');

// Get all students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Add a student
exports.addStudent = async (req, res) => {
  const newStudent = new Student(req.body);
  const saved = await newStudent.save();
  res.json(saved);
};

// Update student
exports.updateStudent = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Student not found' });
  res.json(updated);
};

// Delete student
exports.deleteStudent = async (req, res) => {
  const deleted = await Student.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Student not found' });
  res.json({ message: 'Student deleted' });
};