// Complete the following functions.

const nFibonacci = (n) => {
  return n < 2 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  return n === 0 ? 1 : n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {

};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
