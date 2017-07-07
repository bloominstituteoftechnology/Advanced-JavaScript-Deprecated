// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};


const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 1) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const propArray = Object.getOwnPropertyNames(obj);
  let matches = false;
  if (propArray.length > 1) {
    matches = false;
  } else if (propArray.length === 1) {
    matches = true;
  }
  return matches;
};

// const nFibonacci = (n) => {
//   // fibonacci sequence: 1 2 3 5 8 13 ...
//   // return the nth number in the sequence
//   if (n <= 1) return 1;
//   return nFibonacci(n - 1) + nFibonacci(n - 2);
// };
//
//
// const nFactorial = (n) => {
//   // factorial example: !5 = 5 * 4 * 3 * 2 * 1
//   // return the factorial of `n`
//   if (n === 0) return 1;
//   return n * nFactorial(n - 1);
// };
//
// const checkMatchingLeaves = (obj) => {
//   // return true if every property on `obj` is the same
//   // otherwise return false
//   if (Object.keys(obj).length > 1) return false;
//   return true;
// };

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  // checkMatchingLeaves,
};
