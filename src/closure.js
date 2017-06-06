// Complete the following functions.

/* eslint-disable no-unused-vars */

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  const count = () => {
    let x = 0;
    x++;
    return x;
  };
  return count;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  // class factory {
  //   constructor(x = 0) {
  //     this.x = x;
  //   }
  //   this.increment() = this.x => this.x++;
  //   this.decrement() = this.x => this.x--;
  // }
  // return factory;
  // const obj = () => {
  //   let x = 0;
  //   const increment() {
  //     x++;
  //     return x;
  //   };
  //   const decrement() {
  //     x--;
  //     return x;
  //   };
  // };
  // return obj;
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
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
  limitFunctionCallCount,
};
