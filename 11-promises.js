const { readFile, writeFile } = require("fs");
// const { readFile, writeFile } = require("fs").promises; // this is the same as below

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
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`
    );
    const result = await readFilePromise(
      "./content/result-mind-grenade.txt",
      "utf8"
    );
    console.log(first, second);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();
