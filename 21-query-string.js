// QUERY STRING
// http://localhost:3000/?name=John&age=30

const express = require("express");
const app = express();
const { products } = require("./content/data");

app.get("/api/v1/query", (req, res) => {
  // http://localhost:3000/api/v1/query?name=taha&age=27
  // console.log(req.query)  => { name: 'taha', age: '27' }
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send("No products matched your search");
  }
  return res.status(200).json(sortedProducts);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
