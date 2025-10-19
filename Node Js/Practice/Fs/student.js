const { rename } = require('fs');

const fs = require('fs').promises;

async function report() {
  const message = "This is a student file.\n";
  const appendedText = "This file contains student details.\n";

  await fs.writeFile('student.txt', message);       // Step 1: Write
  await fs.appendFile('student.txt', appendedText); // Step 2: Append

  const data = await fs.readFile('student.txt', 'utf-8'); // Step 3: Read
  console.log('File content:\n' + data);           // Step 4: Print

  await fs.rename('student.txt', 'student_renamed.txt'); // Step 5: Rename
  console.log('File renamed to student_renamed.txt');

  await fs.unlink('student_renamed.txt'); // Step 6: Delete
}
report();