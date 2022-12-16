const { readFile, writeFile } = require("fs");

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// if you want a execute a complex task you can use promise

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// when we use promise we can use then and catch
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
