const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.get('/create', async (req, res) => {
  await fs.writeFile('note.txt', 'This file was created by Express and FS module.');
  res.send('File created successfully');
});

app.get('/read', async (req, res) => {
  const data = await fs.readFile('note.txt', 'utf-8');
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
