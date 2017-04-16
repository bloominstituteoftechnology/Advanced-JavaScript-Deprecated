// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return (nFibonacci(n - 1) + nFibonacci(n - 2));
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return n;
  return (n * nFactorial(n - 1));
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let allMatch = true;

  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (val === undefined && typeof key !== 'object') {
        val = object[key];
        return undefined;
      }
      if (typeof object[key] === 'object') return checkLeaves(object[key]);
      if (object[key] !== val) {
        allMatch = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return allMatch;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
