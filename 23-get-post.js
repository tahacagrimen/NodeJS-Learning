// HTTP METHODS

// GET www.store.com/api/products => get all products
// POST www.store.com/api/products => create a new product
// GET www.store.com/api/products/:id => get a single product
// PUT www.store.com/api/products/:id => update a single product(params + send data)
// DELETE www.store.com/api/products/:id => delete a single product(path params)

const express = require("express");
const app = express();

let { people } = require("./content/data");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name, age } = req.body;
  if (name && age) {
    return res.status(200).send(`Welcome ${name} (${age})`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
