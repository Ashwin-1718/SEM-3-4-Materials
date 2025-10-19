const fs = require('fs').promises;

async function report() {
  const message = "Student Practical Test Report - FS Module\n";
  const appendedText = "Status: Completed Successfully\n";

  await fs.writeFile('report.txt', message);       // Step 1: Write
  await fs.appendFile('report.txt', appendedText); // Step 2: Append

  const data = await fs.readFile('report.txt', 'utf-8'); // Step 3: Read
  console.log('File content:\n' + data);           // Step 4: Print
  await fs.unlink('report.txt'); // Step 5: Delete
}

report();