// we should put the middleware function before the route handler
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time); // => GET / 2021
  // we need to call next() to move to the next middleware function
  // if we dont call next() the request will be stuck in this middleware function
  next();
};

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = { logger, authorize };
