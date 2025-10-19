const fs = require('fs').promises;

async function createAndReadFile() {
  const message = 'Node.js File System Module Practice.';

  // Write to file
  await fs.writeFile('info.txt', message);

  // Read from file
  const data = await fs.readFile('info.txt', 'utf-8');
  console.log('File content:', data);
}

createAndReadFile();