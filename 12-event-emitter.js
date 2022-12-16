// EVENTS
// Event driven programming
const EventEmitter = require("events");
// First import the EventEmitter class from the events module
const customEmitter = new EventEmitter();
// Then create an instance of the EventEmitter class

// on method is used to listen to an event
// First variable is the name of the event, second is the callback function
customEmitter.on("response", (name, id) => {
  console.log(`data received ` + name + " " + id);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});
// We can listen to the same event multiple times
// The order of the listeners is important

// emit method is used to emit an event
customEmitter.emit("response", "taha", 28);
