// npm --global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// npm --save command, save the package in package.json
// npm install <packageName> --save
// new version of npm will save the package automatically

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// in order to use a module in nodejs, we need to import it
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

// flattenDeep will flatten the array to one level with lodash
const newItems = _.flattenDeep(items);

console.log(newItems);

// when we clone a project from github, we need to install all the dependencies
// npm install

// in order to update a package, we need to use npm update

// npm i -D means install as a dev dependency
// dev dependencies are not required for the project to run
// dev dependencies are required for the project to build or test

// npm uninstall <packageName> - uninstall a package
