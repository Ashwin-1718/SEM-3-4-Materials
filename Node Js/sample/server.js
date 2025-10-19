const express = require('express');
const students = require("./MOCK_DATA.json");

const app = express();
const PORT = 5000;
const PORT_URL = `http://localhost:${PORT}`;

app.get('/', (req, res) => {
    res.send('Welcome to the Student API!');
});

app.get('/users', (req, res) => {
    return res.json(students);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find((student) => student.id === parseInt(id));

    if (!student) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT_URL}`);
});
