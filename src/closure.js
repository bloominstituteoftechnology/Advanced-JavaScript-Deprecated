// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let counts = 0;
  return function newCounter() { return counts += 1; };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  return {
    increment: () => num += 1,
    decrement: () => num -= 1
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let num = 0;
  return (...args) => {
    if (num < n) {
      num++;
      return cb(...args);
    } return null;
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  // made sure to get rid of warning for not naming the function
  const cache = {};
  return function cacheReturn(property) {
    if (Object.prototype.hasOwnProperty.call(cache, property)) {
      return cache[property];
    }
    cache[property] = cb(property);
    return cache[property];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
