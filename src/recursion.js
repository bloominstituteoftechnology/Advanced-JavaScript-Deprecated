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

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on obj is the same
  // otherwise return
  //
  // Used an array to store an undefined value.
  // If I used something like leaf = undefined and looped
  // through checking if leaf was still undefined,
  // it would return true in cases where some
  // object's values were set to undefined
  // and all others were set to 1 or whatever else
  const leaves = [];
  const getLeaves = (branch) => {
    // if it finds more than two leaves, it skips over everything else
    if (leaves.length <= 1) {
      if (typeof branch === 'object') {
        arrayMethods.each(objectMethods.values(branch), twig => getLeaves(twig));
      } else if (leaves.indexOf(branch) < 0) {
        leaves.push(branch);
      }
    }
  };

  getLeaves(obj);

  // empty object is truthy
  return leaves.length <= 1;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
