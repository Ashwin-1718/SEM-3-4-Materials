 const Student = require('../models/Student');

exports.getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong while getting students.' });
  }
};

exports.addStudent = async (req, res) => {
    try {
      const student = new Student(req.body);
      const saved = await student.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ message: 'Could not add student', error: err.message });
    }
  };

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    res.json(student);
  } catch (err) {
    res.status(400).json({ message: 'Could not update the student.' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    res.json({ message: 'Student deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Could not delete the student.' });
  }
};
