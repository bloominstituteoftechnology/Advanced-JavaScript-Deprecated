// Complete the following functions.

const counter = () => {
  let count = 0;
  const i = () => ++count;
  return i;
};

const counterFactory = () => {
  let count = 0;
  const obj = {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    }
  };
  return obj;
};

const limitFunctionCallCount = (cb, n) => {
  const limit = n;
  let count = 0;
  const i = (...args) => {
    if (count < limit) {
      count++;
      return cb(...args);
    }
    return null;
  };
  return i;
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
