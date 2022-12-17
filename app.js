// JSON
// JSON is a syntax for storing and exchanging data.
// JSON is text, written with JavaScript object notation.

const express = require("express");
const app = express();
// importing data from data.js
const { products, people } = require("./content/data");

// res.json method sends a JSON response.
app.get("/", (req, res) => {
  res.json(people);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
