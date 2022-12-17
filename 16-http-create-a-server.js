const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./content/index.html");

const server = http.createServer((req, res) => {
  console.log(req.method); // GET
  console.log(req.url); // /
  const url = req.url;
  if (url === "/") {
    // writeHead() is used to send a response header to the request. First argument is the status code and the second argument is an object containing the response headers.
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.end() is used to send a response to the client and end the request
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    // We are sending a 404 response code to the client. Beacause the requested page is not found.
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
