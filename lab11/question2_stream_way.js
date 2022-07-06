const http = require('http');
const fs = require('fs');
const path = require('path');

const big_img = './background2.jpeg';
const port = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  const readableStream = fs.createReadStream(path.join(__dirname, big_img));
  
  readableStream.on('error', (err) => {
    console.log('Error: ' + err.message);
  });
  readableStream.on('data', (chunk) => {
    res.write(chunk);
  });
  readableStream.on('end', () => {
    res.end();
  });  
}).listen(port, () => console.log(`Server is running on port ${port}`));