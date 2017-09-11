// Complete the following functions.

const counter = () => {
  let count = 0;

  const incrementCount = function () {
    count++;
    return count;
  }; return incrementCount;
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
  // const obj = {
  //   count: 1,
  //   increment: (count) => {
  //     count++;
  //     return count;
  //   },
  //   decrement: (count) => {
  //     count--;
  //     return count;
  //   }
  // }; return obj;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count >= n) return null;
    count++;
    return cb(...args);
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* Extra Credit */
const cacheFunction = (cb) => {
  const cache = {};
  return function (arg) {
    if (arg in cache) return cache[arg];
    return cache[arg] = cb(arg);
  };
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
