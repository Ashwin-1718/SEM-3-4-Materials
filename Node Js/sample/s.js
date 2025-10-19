const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const UserModel = require('./models/users.js');
const userRouter = require('./routes/users.js');
const students = require("./MOCK_DATA.json");                                                 
const app = express();
const PORT = 5000;
const PORT_URL = `http://localhost:${PORT}`;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Sample')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log("Mongo Error", error));

// User Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String, required: true },
    gender: { type: String, required: true }
});

// User Model
const UserModel = mongoose.model('User', userSchema);

// Create User
app.post('/api/users', async (req, res) => {
    try {
        const result = await UserModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            jobTitle: req.body.jobTitle,
            gender: req.body.gender
        });
        res.status(201).json({ message: "User Created", user: result });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});

// Home Route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Get All Users (From JSON File)
app.get('/api/users', (req, res) => {
    res.json(students);
});

// Get User by ID (From JSON File)
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.patch('/api/users/:id',async (req, res) => {
    const myid = req.params.id;
    const result = await UserModel.findByIdAndDelete(myid, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender
    });
    console.log(result)
    res.json({message:"user Updated Succesfully!!"})
})

// Delete user by ID (From JSON File)
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(student => student.id === id);

    if (index !== -1) {
        const deletedStudent = students.splice(index, 1)[0];

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error saving data" });
            }
            res.json({ message: "Student deleted", student: deletedStudent });
        });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT_URL}`);
});
