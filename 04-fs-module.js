const { readFileSync, writeFileSync } = require("fs");

// ilk parametrede dosya yolunu, ikinci parametrede utf8 ile stringe çeviriyoruz.
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);
// => Hello, this is first file. Hello, this is second file.s

// writeFileSync ile dosyaya yazıyoruz.
// ilk değer dosya yolu, ikinci değer yazılacak veri, üçüncü değer ise flag değeri.
// flag değeri dosyanın üzerine mi yazılacak yoksa yeni bir dosya mı oluşturulacak onu gösteriyor.
// a: append, e: edit, w: write
writeFileSync(
  "./content/result-sync.txt",
  `Here is
the result: ${first}, ${second}`,
  { flag: "a" }
);
