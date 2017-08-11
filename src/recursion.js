// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  return n <= 1 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  return n <= 1 ? 1 : n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const array = [];
  const rf = (...args) => {
    Object.values(...args).forEach((v) => {
      return typeof v === 'object' ? rf(v) : array.push(v);
    });
  };
  rf(obj);
  return new Set(array).size === 1;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
