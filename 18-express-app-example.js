const express = require("express");
const app = express();
const path = require("path");
// path module is used to get the path of the current file

// if we have css or js files in the content folder, we can use the following code to use them
app.use(express.static("./content"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/content", "index.html"));
//   adding to static assets
//   SSR
// });

app.all("*", (req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
