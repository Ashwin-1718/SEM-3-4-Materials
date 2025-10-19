const fs = require('fs');

fs.writeFile('callback_example.txt', 'This is a callback example.', (err) => {
  if (err) {
    console.log('Error writing file');
    return;
  }

  fs.readFile('callback_example.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file');
      return;
    }

    console.log('File content:', data);
  });
});
