//Create a web server that's going to send a response of big image to any client that sends a request to your specified server:port. (Try to solve this in many different ways)
//synchronouse, asynchronous, stream, pipe
const http = require('http');
const fs = require('fs');
const path = require('path');
const big_img = './background2.jpeg';
const port = 3000;


//synchronous
const server = http.createServer();
server.on("request", (req, res) => {
  res.writeHead(200, { 'Content-type': 'image/jpeg' });
  //read image and send response here
  const data = fs.readFileSync(path.join(__dirname, big_img));
  res.end(data);
});
server.listen(port, 'localhost', () => console.log('Server is running in ' + port));
