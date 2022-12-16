const http = require("http");
const fs = require("fs");

// We can use the readFileSync method to read the file synchronously but it is not recommended to use it because it will block the event loop and it will not allow any other request to be processed until the file is read completely.

// the data is too big to be read synchronously

// http
//   .createServer((req, res) => {
//     const text = fs.readFileSync("./content/big.txt", "utf8");
//     res.end(text);
//   })
//   .listen(5000);

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
