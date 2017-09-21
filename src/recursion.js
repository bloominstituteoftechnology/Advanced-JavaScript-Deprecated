// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  } return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return undefined;
  }
  for (let i = n; --i;) {
    n *= i;
  }
  return n;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let leaf = '';
  let leavesMatch = true;
  const checkForMatches = (tree) => {
    Object.keys(tree).forEach((key) => {
      if (leaf === '' && typeof key !== 'object') {
        leaf = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') {
        return checkForMatches(tree[key]);
      }
      if (tree[key] !== leaf) {
        leavesMatch = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkForMatches(obj);
  return leavesMatch;
};
checkMatchingLeaves({ a: 1, b: 1, c: { ca: 1, } });
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
