const fs = require('fs');
const User = require('../models/User');
const students = require("../data/MOCK_DATA.json");

// For MongoDB operations
const createUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(201).json({ message: "User Created", user: result });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

const updateUser = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User Updated Successfully!!", user: result });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

// For JSON file operations
const getAllUsers = (req, res) => {
    res.json(students);
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(student => student.id === id);

    if (index !== -1) {
        const deletedStudent = students.splice(index, 1)[0];

        fs.writeFile("./data/MOCK_DATA.json", JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error saving data" });
            }
            res.json({ message: "Student deleted", student: deletedStudent });
        });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
};

module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser
};