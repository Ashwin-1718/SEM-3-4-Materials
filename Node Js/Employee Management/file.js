// const fs = require('fs').promises;

// const { write } = require('fs');

// async function file() {
//   try {
//     await fs.writeFile('message.txt', 'Hello, this is a sample text written using Node.js!');
//     console.log('Text written to message.txt');

//     const content = await fs.readFile('message.txt', 'utf8');
//     console.log('File content:', content);
    
//   } 
//   catch (error) {
//     console.error('Something went wrong:', error.message);
//   }
// }

// file();


const fs = require('fs').promises;

async function file() {
  await fs.writeFile('message.txt', 'Hello Form Node.js!');
  console.log('Text written to message.txt');

  const content = await fs.readFile('message.txt', 'utf8');
  console.log(content);
}

file();
