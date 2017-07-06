// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

  let count = 0;

  return () => ++count;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

  let invoked = 0;

  return (...args) => {
    if (invoked < n) {
      invoked++;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  // NOT A PARTICULARLY JS WAY OF DOING IT
  const usedArgs = [];

  const compareCached = (x, y) => {
    if (x.length !== y.length) {
      return false;
    }

    return x.some(e => y.indexOf(e) !== -1);
  };

  const cached = (...args) => {
    for (let i = 0; i < usedArgs.length; i++) {
      const usedArg = usedArgs[i];
      if (compareCached(args, usedArg.args)) {
        return usedArg.theResult;
      }
    }

    return null;
  };

  const cacheResult = (result, ...args) => {
    usedArgs.push({
      args: args.sort(),
      theResult: result,
    });
  };

  return (...args) => {
    const result = cached(...args);

    if (result !== null) {
      return result;
    }

    const newResult = cb(...args);
    cacheResult(newResult, ...args);

    return newResult;
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
