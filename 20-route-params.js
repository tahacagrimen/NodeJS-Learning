// JSON
// JSON is a syntax for storing and exchanging data.
// JSON is text, written with JavaScript object notation.

const express = require("express");
const app = express();
// importing data from data.js
const { products, people } = require("./content/data");

// res.json method sends a JSON response.
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  // req.params is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}. This property is useful for building REST APIs.
  console.log(req.params); // => { productID: '1' }
  const { productID } = req.params; // destructuring req.params
  // find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
    // productID is a string, so we need to convert it to a number
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params); // => { productID: '1', reviewID: '2' }
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
