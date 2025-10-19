const fs = require('fs').promises;

async function appendAndRead() {
  const initialText = 'This is the original content.\n';
  const appendedText = 'New Line Added!\n';

  await fs.writeFile('data.txt', initialText);         // Step 1
  await fs.appendFile('data.txt', appendedText);       // Step 2

  const content = await fs.readFile('data.txt', 'utf-8'); // Step 3
  console.log('Final file content:\n' + content);
}

appendAndRead();