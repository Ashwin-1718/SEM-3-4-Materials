const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fileName = 'myfile.txt';

function createFile() {
  fs.writeFileSync(fileName, 'This is a new file.\n');
  console.log('✅ File created.');
}

function readFile() {
  if (fs.existsSync(fileName)) {
    const content = fs.readFileSync(fileName, 'utf-8');
    console.log('📖 File content:\n' + content);
  } else {
    console.log('⚠️ File does not exist.');
  }
}

function updateFile() {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, 'New line added.\n');
    console.log('✏️ File updated.');
  } else {
    console.log('⚠️ File does not exist.');
  }
}

function deleteFile() {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
    console.log('❌ File deleted.');
  } else {
    console.log('⚠️ File does not exist.');
  }
}

// Menu
console.log('\n📁 FS CRUD App');
console.log('1. Create File');
console.log('2. Read File');
console.log('3. Update File');
console.log('4. Delete File');
console.log('5. Exit\n');

rl.question('Choose an option (1-5): ', (answer) => {
  switch (answer) {
    case '1':
      createFile();
      break;
    case '2':
      readFile();
      break;
    case '3':
      updateFile();
      break;
    case '4':
      deleteFile();
      break;
    default:
      console.log('👋 Exiting...');
  }
  rl.close();
});