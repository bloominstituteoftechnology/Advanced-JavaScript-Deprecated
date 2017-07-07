// // Complete the following functions.
//
// /* eslint-disable no-unused-vars */
//
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   // Example: const newCounter = counter();
//   // newCounter(); // 1
//   // newCounter(); // 2
//   let increment = 0;
//   return () => (++increment);
// };
//
// const counterFactory = () => {
//   // **Return an **object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
//   let counterVar = 0;
//   return {
//     increment: () =>
//     (counterVar++),
//     decrement: () =>
//     (counterVar--),
//   };
// };
//
// const limitFunctionCallCount = (cb, n) => {
//   // Should return a function that invokes `cb`.
//   // The returned function should only allow `cb` to be invoked `n` times.
//   let countTimes = 0;
//   return (x) => {
//     if (countTimes === n) return null;
//     countTimes++;
//     return cb(x);
//   };
// };
//
// const cacheFunction = (cb) => {
//   const cache = {};
//   return (input) => {
//     if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
//     cache[input] = cb(input);
//     return cache[input];
//   };
//   // Should return a funciton that invokes `cb`.
//   // A cache (object) should be kept in closure scope.
//   // The cache should keep track of all arguments have been used to invoke this function.
//   // If the returned function is invoked with arguments that it has already seen
//   // then it should return the cached result and not invoke `cb` again.
//   // `cb` should only ever be invoked once for a given set of arguments.
// };
//
// /* eslint-enable no-unused-vars */
//
// module.exports = {
//   counter,
//   counterFactory,
//   cacheFunction,
//   limitFunctionCallCount
// };

// Complete the following functions.

/* eslint-disable no-unused-vars */

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  // const newCounter = () => {
  //   count++;
  // };
  return () => (++count);
};

const counterFactory = () => {
  // **Return an **object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counterObj = 0;
  return {
    increment: () => (counterObj++),
    decrement: () => (counterObj--),
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // for (let i = n; i > 0; i--) {
  //   return (x) => {
  //     cb(x);
  //   };
  // }
  let tab = 0;
  if (tab < n) {
    return (x) => {
      cb(x);
      tab++;
    };
  }
};

const cacheFunction = (cb) => {
  const cacheObj = {};
  cb();
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
