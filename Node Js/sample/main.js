const fs = require('fs');


// fs.writeFileSync("./abc.txt", "File Created");

// const result = fs.readFileSync("./abc.txt", "utf-8");
// console.log(result);


// fs.readFile("./abc.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


// fs.appendFileSync("./abc.txt", "File Created");
// fs.unlinkSync("./abc.txt");


// const fs = require('fs');


fs.writeFileSync("./number.txt", ""); 

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
    }
    else {
        continue;
    }
    fs.appendFileSync("./number.txt", `${i}\n`);
}
