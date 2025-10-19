const http = require('http');
// const fs = require('fs');
const url = require('url');


const myserver  = http.createServer((req, res) => {
    console.log(req.url);

    // console.log("new request made!");
    // fs.writeFile("log.txt", "New Requset made!", (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    // res.end("Hello from server!");
});
myserver.listen(5000,() => {
    console.log("Server is running at http://localhost:5000/");
 
}); 