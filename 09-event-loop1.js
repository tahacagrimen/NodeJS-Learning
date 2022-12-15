// Event Loop Examples

// started operating system process
console.log("First");
// setTimeout is executed by the web API.
setTimeout(() => {
  // callback function is pushed to the callback queue
  console.log("Second");
}, 0);
console.log("Third");

// => First Third Second
