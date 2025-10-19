const fs = require('fs').promises;

fs.readFile('random.txt', 'utf-8')
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((err) => {
    console.log('File not found!');
  });
