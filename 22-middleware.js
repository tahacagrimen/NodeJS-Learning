// MIDDLEWARES
const express = require("express");
const app = express();

// req => middleware => res

// 1. use vs route
// 2. options - our own middleware / express built-in middleware / third-party middleware

// importing middleware function from 22-middleware-funcs.js
const { logger } = require("./22-middleware-funcs");
const { authorize } = require("./22-middleware-funcs");

// middleware is a function that has access to the request and response objects and the next middleware function in the application's request-response cycle.
// second parameter is the middleware function
// app.get("/", logger, (req, res) => {
//   res.send("Home");
// });

// we can also use app.use() to use the middleware function. app.use() is used to register middleware functions for all routes.
app.use([logger, authorize]);
// multiple middleware functions can be passed as an array
// they will be executed in the order they are passed

// if we pass a path as the first parameter, the middleware function will be used only for that path
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

// if we want to pass multiple middleware functions to a route handler, we can pass them as an array
app.get("/api/items", [authorize, logger], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
