// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  let count = 0;
  const newCounter = () => {
    count++;
    return count;
  };
  return newCounter;
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;

  const countObj = {
    increment: () => {
      counter++;
      return counter;
    }
    decrement: () => {
      counter = counter - 1;
      return counter;
    }
  };

  return countObj;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let timesCalled = n;
  const inner() => {
    if (timesCalled <= timesCalled) {
      return cb();
    };
  };
  return inner;
};

/* Extra Credit */
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
