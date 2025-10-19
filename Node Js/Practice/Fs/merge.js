const fs = require('fs').promises;

async function mergeFiles() {
  // Step 1: Create both files
  await fs.writeFile('file1.txt', 'Hello from File 1\n');
  await fs.writeFile('file2.txt', 'Hello from File 2\n');

  // Step 2: Read both files
  const data1 = await fs.readFile('file1.txt', 'utf-8');
  const data2 = await fs.readFile('file2.txt', 'utf-8');

  // Step 3: Merge contents
  const mergedContent = data1 + data2;
  await fs.writeFile('merged.txt', mergedContent);

  // Step 4: Print merged file content
  const final = await fs.readFile('merged.txt', 'utf-8');
  console.log('Merged content:\n' + final);
}

mergeFiles();