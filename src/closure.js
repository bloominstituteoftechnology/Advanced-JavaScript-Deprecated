// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  // return function () { ++count; };
  return () => (++count);
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count)
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // let count =
  // return () => (cb());
  // const bob = function () { cb(); };
  // return bob;
  // if (n <= 0) return 0;
  // return () => {
  //   cb();
  //   limitFunctionCallCount(cb, n - 1);
  // };
  let count = 0;
  return (...args) => {
    if (count === n) return null;
    count++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  // return () => (cb());
  // cache = {};
  // const inv = function () { cb(); };
  // return inv;
  const cache = {};
  return (value) => {
    if (Object.prototype.hasOwnProperty.call(cache, value)) return cache[value];
    cache[value] = cb(value);
    return cache[value];
  };
  // return function(value) {
  //   if (!cache.hasOwnProperty(value)) {
  //     cache[value] = cb(value);
  //     return cache[value];
  //   }
  //   return cache[value];
  // };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
