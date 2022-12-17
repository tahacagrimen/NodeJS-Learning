// EXPRESS JS
// Express is a framework for NodeJS
// npm install express --save

// Importing Express
const express = require("express");
// Creating an instance of Express
const app = express();

// app.get is used to create a route for GET request
app.get("/", (req, res) => {
  console.log("User hit the endpoint");
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

// app.post

// app.put

// app.delete

// app.all handles all the HTTP methods.
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

// app.use

// app.listen is used to start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
