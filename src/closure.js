// Complete the following functions.

const counter = () => {
  let ct = 0;
  return () => ++ct;
};

const counterFactory = () => {
  let ct = 0;
  return {
    increment() {
      return ++ct;
    },
    decrement() {
      return --ct;
    }
  };
};

const limitFunctionCallCount = (cb, n) => {
  let l = n;
  return (...args) => {
    if (l > 0) {
      l--;
      return cb(...args);
    } return null;
  };
};

const cacheFunction = (cb) => {
  const c = {};
  return (n) => {
    return n in c ? c[n] : c[n] = cb(n);
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
