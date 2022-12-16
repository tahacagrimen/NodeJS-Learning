// STREAMS
// There are four types of streams
// Readable - Readable streams are streams from which data can be read (ex: fs.createReadStream).
// Writable - Writable streams are streams to which data can be written (ex: fs.createWriteStream).
// Duplex - Duplex streams are streams that implement both the Readable and Writable interfaces (ex: net.Socket).
// Transform - Transform streams are Duplex streams where the output is in some way computed from the input (ex: zlib.createDeflate).

const { createReadStream, createWriteStream } = require("fs");
// default highWaterMark is 64kb
// highWaterMark is the size of the buffer

// creating a read stream
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
