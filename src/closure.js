// Complete the following functions.

const counter = () => {
  let count = 0;
  const newCounter = () => {
    count++;
    return count;
  };
  return newCounter;
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let count = 0;
  const newCounter = (value) => {
    count += value;
  };
  return {
    increment() {
      newCounter(1);
      return count;
    },
    decrement() {
      newCounter(-1);
      return count;
    }
  };

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = (cb) => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};

  return (input) => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) {
      return cache[input];
    }
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
