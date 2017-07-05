// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if ( n === 1) {
    return n;
  }
  return n * nFactorial(n - 1)
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const trees = Object.keys(obj);
  const treeKeys1 = Object.keys(trees[0]);
  const treeKeys2 = Object.keys(trees[1]);
  const n = treeKeys1.length;
  const m = treeKeys2.length;
  if (n !=== m) {
    return false;
  }
  let z = 0;
  if ((obj[1][(treeKeys1[z])]) === (Obj[2][(treeKeys1[z])]) {
    return checkMatchingLeaves(obj), z;
  }
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
