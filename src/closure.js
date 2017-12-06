// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    ++count;
    return count;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let s = 0;
  return {
    increment: () => {
      s += 1;
      return s;
    },
    decrement: () => {
      s -= 1;
      return s;
    },
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;

  return (...args) => {
    if (n === count) {
      return null;
    }

    count++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const storage = {};
  const args = [];
  const tempCB = cb;
  let tempFunc = tempCB.toString().split(' ')[1];
  if (tempCB !== undefined) {
    const ourFunc = tempCB.toString().split(' ')[1].split('');

    for (let i = 0; i <= ourFunc.indexOf('(') + 1; i++) {
      ourFunc.splice(ourFunc[i], 1);
    }

    tempFunc = ourFunc;
    tempFunc.shift();
    tempFunc.pop();

    console.log('OUR NEW FUNC SHOUDL BE: ', tempFunc);
  }

  console.log(tempFunc[0]);

  if (storage[tempFunc[0]] === undefined) {
    storage[tempFunc[0]] = cb();
  }

  console.log('RES IS: ', cb(tempFunc[0]));

  return function () {
    const arg = tempFunc[0];
    if (!storage[arg]) {
      storage[arg] = cb(arg);
    }

    return storage[arg];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
