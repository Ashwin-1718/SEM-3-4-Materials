const fs = require("fs");

fs.writeFileSync("./numbers.txt", "Numbers 1 to 10\n");
console.log("File created successfully.");

for (let i = 10; i >= 1; i--) {
  s = String(i) + "\n";
  fs.appendFileSync("./numbers.txt", s);
  console.log("printed number", i);
}


// ODD NUMBERS
// const fs = require('fs');

// // Step 1: Write header
// fs.writeFile('even.txt', 'Even Numbers from 1 to 20\n', () => {
//   console.log('File created successfully.');

//   // Step 2: Loop through 1 to 20
//   for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//       fs.appendFile('even.txt', i + '\n', () => {
//         console.log(`Appended: ${i}`);
//       });
//     }
//   }
// });