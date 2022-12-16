const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
  } else if (req.url === "/node") {
    // BLOCKING CODE EXAMPLE !!!
    // for (let i = 0; i < 1e7; i++) {
    //   // Simulate CPU work
    //   console.log("Blocking code" + i);
    // }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Node</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
