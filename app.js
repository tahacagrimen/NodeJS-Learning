const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Home page");
});

server.listen(3000);
