// Complete the following functions.

/* eslint-disable no-unused-vars */

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let memo = 0;
  const newCounter = () => {
    memo += 1;
    return memo;
  };
  return newCounter;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let memo = 0;
  return {
    increment() {
      memo += 1;
      return memo;
    },
    decrement() {
      memo -= 1;
      return memo;
    },
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let memo = 0;
  const limitedFunction = (...args) => {
    let ans = cb(...args);
    if (memo >= n) {
      ans = null;
    }
    memo += 1;
    return ans;
  };
  return limitedFunction;
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  const cachedFunction = (args) => {
    let ans = cb(args);
    if (Object.keys(cache).includes(args)) {
      ans = cache[args];
    }
    cache[args] = ans;
    return ans;
  };
  return cachedFunction;
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
