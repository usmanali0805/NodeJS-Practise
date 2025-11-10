// const http = require('node:http');
// We cann't use the above method in ES6 this isn't allow to do this we have to import this like downward method and if we have to use this method so we have to add type : module in package.json 

// import http from "http"
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello, World Usman</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// EcmaScrip ES6 feature 

// We can import name export like this 

// import {a , b, c} from "./server.js"

// console.log(a, b, c)

// We can import default export like this and import it by any name like usman or any name or word
// import obj from "./server.js"
// console.log(obj)

// import usman from "./server.js"
// console.log(usman)


// Common JS feature 
// We have to remove type from module 
let a = require('./server.js')
console.log(a)

// Node convert this import into this function and also provide __filename , _dirname or etc
// (function(exports , require , module , __filename , __dirname){
//     // Module code actually live here
// })