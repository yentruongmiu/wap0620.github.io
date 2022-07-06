const http = require('http');
const fs = require('fs');
const path = require('path');
const big_img = './background2.jpeg';
const port = 3000;


//asynchronous
http.createServer((req, res) => {
  //send response image here
  res.writeHead(200, { 'Content-type': "image/jpeg" })
  fs.readFile(path.join(__dirname, big_img), (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
}).listen(port, () => console.log('Server is running in port 3000.'));