// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return nFactorial(n - 1) * n;
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  //
  // otherwise return false
  let flag = true;
  let check;
  const checkLeaf = (testObject) => {
    Object.keys(testObject).forEach((key) => {
      if (typeof key !== 'object' && check === undefined) {
        check = testObject[key];
      } else if (typeof testObject[key] === 'object') {
        checkLeaf(testObject[key]);
      } else if (testObject[key] !== check) {
        flag = false;
      }
    });
  };
  checkLeaf(obj);
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
