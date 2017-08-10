// Complete the following functions.

const nFibonacci = (n) => {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};


const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const flat = [];
  const recursion = (...args) => {
    Object.values(...args).forEach((value) => {
      if (typeof value === 'object') {
        return recursion(value);
      }
      flat.push(value);
    });
    return flat.every(p => p === flat[0]);
  };
  return recursion(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
