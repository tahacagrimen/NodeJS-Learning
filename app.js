// MIDDLEWARES
const express = require("express");
const app = express();

// we should put the middleware function before the route handler
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time); // => GET / 2021
  // we need to call next() to move to the next middleware function
  // if we dont call next() the request will be stuck in this middleware function
  next();
};

// middleware is a function that has access to the request and response objects and the next middleware function in the application's request-response cycle.
// second parameter is the middleware function
app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
