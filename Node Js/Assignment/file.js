const fs = require('fs').promises;

async function file() {
  try {
    await fs.writeFile('message.txt', 'Hii');
    console.log('Text written to message.txt');

    const content = await fs.readFile('message.txt', 'utf8');
    console.log('File content:', content);
    
  } 
  catch (error) {
    console.error('Something went wrong:', error.message);
  }
}

file();