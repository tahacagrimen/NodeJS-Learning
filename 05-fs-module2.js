const { readFile, writeFile } = require("fs");

// async ve callback kullanımı
// readFile ile dosyayı okuyoruz.
// ilk parametrede dosya yolunu, ikinci parametrede utf8 ile stringe çeviriyoruz.
// üçüncü parametrede ise callback fonksiyonu yazıyoruz.
// callback fonksiyonunun ilk parametresi hata, ikinci parametresi ise okunan veri.

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(result);
//     // => Hello this is first text file
//   }
// });

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `!Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        // => undefined
      }
    );
  });
});
