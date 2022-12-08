const secret = "SUPER SECRET";
const john = "john";
const peter = "peter";

// another method of exporting
module.exports.adam = "adam";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

// Share
module.exports = { john, peter, secret, sayHi };
