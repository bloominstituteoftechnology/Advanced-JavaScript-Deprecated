// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  // version 1 √
  // let value = 0;
  // const increment = () => value += 1;
  // return increment;

  // verion 2 √
  // let value = 0;
  // const increment = i => value += 1; // Interesting that this works - why?
  // return increment;

  // version 3 √
  let value = 0;
  return () => value += 1;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  // version 1 ???
  let value = 0;
  const obj = {
    increment() {
      value += 1;
    },
    decrement() {
      value -= 1;
    }
  };
  return obj;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // version 1
  // let callCount = 0;
  // const limit = () => {
  //   if (callCount >= n) return;
  //   callCount++;
  //   cb();
  // };
  // return limit;
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
