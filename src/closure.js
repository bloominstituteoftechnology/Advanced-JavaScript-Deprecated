// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  const newCounter = () => {
    return ++count;
  };
  return newCounter;
};

const counterFactory = () => {
  let count = 0;
  const obj = {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
  return obj;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  const checker = (...rest) => {
    count++;
    const checkem = () => {
      cb(rest);
    };
    if (count < n) checkem();
  };
  return checker;
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* Extra Credit */
const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  const cacher = (x) => {
    if (x in cache) return cache[x];
    const answer = cb(x);
    cache[x] = answer;
    return answer;
  };
  return cacher;
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
