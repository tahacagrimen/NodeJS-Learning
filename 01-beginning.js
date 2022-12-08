// Node.js is an envorment that allows us to run JavaScript outside of the browser
// Node.js is a JavaScript runtime
// No DOM, no window, server-side apps, filesystem, versions, common JS

// GLOBAL - NO WINDOW !!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about envorment where the program is being executed

// MODULES - Encapsulated Code (only share minimum)
// How to import modules
const { john, peter, secret, sayHi } = require("./01-modulebasics");
// We are destructuring the object that is exported from the module

// mine-grenade.js
require("./01-mind-grenade");

sayHi(john);
