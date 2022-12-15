// HTTP (Hypertext Transfer Protocol) MODULE

const http = require("http");

// Create a server object
// The createServer() method takes a function as a parameter
// The function has a request(req) and a response(res) parameter
const server = http.createServer((req, res) => {
  // req means request from the client
  // client request for the root of the server "/"
  if (req.url === "/") {
    // res means response from the server
    // server response with "Hello World my name is Taha"
    res.write("Hello World my name is Taha");
    res.end();
  }
  if (req.url === "/api/courses") {
    // client request for the root of the server "/api/courses"
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
  res.end(`
    <h1>404</h1>
    <p>Page not found</p>
    <a href="/">Back to home</a>`);
});

// The server object listens on port 3000
server.listen(3000);
