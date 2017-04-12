// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const values = [];

  const flatten = (set) => {
    const keys = Object.keys(set);

    for (let i = 0, len = keys.length; i < len; i++) {
      if (typeof set[keys[i]] !== 'object') {
        values.push(set[keys[i]]);
      } else {
        return flatten(set[keys[i]]);
      }
    }
    return null;
  };

  const checkVals = (vals) => {
    for (let i = 0, len = vals.length; i < len; i++) {
      if (vals[i] !== vals[0]) return false;
    }
    return true;
  };

  flatten(obj);
  return checkVals(values);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
