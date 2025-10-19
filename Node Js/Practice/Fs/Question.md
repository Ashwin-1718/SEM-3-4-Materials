🧩 Q1. (Simple Create and Read)
Task:
Write a Node.js program to:

Create a file named info.txt.

Write: "Node.js File System Module Practice."

Then read info.txt and print its content to the console.

Use fs.promises with async/await.


🧩 Q2. (Error Handling Required)

Try to read a file random.txt (which does not exist).

Handle the error and display a custom message: "File not found!" instead of crashing the program.


🧩 Q3. (Update File)

Create a file data.txt with some text.

Then, update (append) the file by adding:
"New Line Added!" at the end.

Finally, read and display the updated contents.

Hint: Use fs.appendFile and fs.readFile.


🧩 Q4. (Callback Style)
Write a Node.js script using callback style (not promises) to:

Create a file callback_example.txt.

Write "This is a callback example." into it.

Then read and display the content.


🧩 Q5. (Multiple File Handling - Twisty One)
Create two files:

file1.txt → "Hello from File 1"

file2.txt → "Hello from File 2"

Then:

Read both files simultaneously and merge their content into a new file called merged.txt.


🧩 Q6. (Deleting Files)

Write a program to create a file delete_me.txt and write some dummy text.

Then delete the file.

Make sure you handle any errors during deletion.