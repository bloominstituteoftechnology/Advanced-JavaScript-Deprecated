// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let inc = 0;
  return {
    increment: () => ++inc,
    decrement: () => --inc
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

  let cbcount = 0;
  const caller = cb;

  return (...nums) => {
    cbcount += 1;
    if (cbcount <= n) {
      return caller(...nums);
    }
    return null;
  };
};

/* Extra Credit */
const cacheFunction = (cb) => {
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  const cache = {};
  // Should return a funciton that invokes `cb`.
  return (arg) => {
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
    if (!(arg in cache)) {
      cache[arg] = cb(arg);
    }
    return cache[arg];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
