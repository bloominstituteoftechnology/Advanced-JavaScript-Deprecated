// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n > 1) {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  } return 1;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let factorial = 1;
  for (let i = 0; i < n; i++) {
    factorial *= n - i;
  }
  return factorial;
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // let arg;
  // my attempt
  // Object.keys(obj).forEach((key) => {
  //  if (arg === undefined && typeof key !== 'object') {
  //    arg = obj[key];
  //    return false;
  //  } else if (obj[key] === 'object') {
  //    return true;
  //  } else if (obj[key] !== arg) {
  //    return false;
  //  } return false;
  // });
  // Ben's solution
  let leafValue;
  let leavesMatch = true;
  const checkLeaf = (object) => {
    Object.keys(object).forEach((key) => {
      if (leafValue === undefined && key instanceof Object !== true) {
        leafValue = object[key];
        return undefined;
      }
      if (object[key] instanceof Object === true) return checkLeaf(object[key]);
      if (object[key] !== leafValue) {
        leavesMatch = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaf(obj);
  return leavesMatch;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
