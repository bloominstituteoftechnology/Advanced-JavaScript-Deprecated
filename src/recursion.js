// Complete the following functions.
const arrayMethods = require('../src/arrays');
const objectMethods = require('../src/objects');

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
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
  // return true if every property on obj is the same
  // otherwise return false
  const leaves = [];
  const getLeaves = (branch) => {
    if (leaves.length <= 1) {
      if (typeof branch === 'object') {
        arrayMethods.each(objectMethods.values(branch), twig => getLeaves(twig));
      } else if (leaves.indexOf(branch) < 0) {
        leaves.push(branch);
      }
    }
  };

  getLeaves(obj);

  return leaves.length <= 1;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
