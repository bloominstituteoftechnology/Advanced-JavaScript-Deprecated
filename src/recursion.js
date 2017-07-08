// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let ans = 1;
  if (n > 1) {
    ans = nFibonacci(n - 1) + nFibonacci(n - 2);
  }
  return ans;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let ans = 1;
  if (n >= 2) {
    ans = nFactorial(n - 1) * n;
  }
  return ans;
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  //check for nested props

};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
