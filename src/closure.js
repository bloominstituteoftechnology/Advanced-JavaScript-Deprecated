// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return function () {
    return count += 1;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const obj = {};
  obj.increment = function () {
    return count += 1;
  };
  obj.decrement = function () {
    return count -= 1;
  };
  return obj;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return function () {
    count += 1;
    if (count < n) return cb();
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return function (arg) {
    if (Object.keys(cache).includes(arg)) return cache[arg];
    cache[arg] = cb(arg);
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
