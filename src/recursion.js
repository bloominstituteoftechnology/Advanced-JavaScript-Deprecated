// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 3) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;
  return (n * nFactorial(n - 1));
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const sameArray = [];
  Object.keys(obj).forEach((element) => {
    if (typeof element === 'object') {
      checkMatchingLeaves(element);
    }
    sameArray.push(element);
  });
  sameArray.forEach((element) => {
    if (element !== sameArray[0]) return false;
    return true;
  });
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
