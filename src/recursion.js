// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
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
  //                                             { key: value, key:  vv value vv }
  // INPUT: will either be a number or an object {   x:   1  ,   y: {key: value} }
  //                                             typeof obj[y] >>> 'object'
  // FUNCTION:
  // leafValue
  // recursive function()
    // iterate over the keys on obj
      // find first non object value         vvv    recursion    vvv
      // if object[key] is an object, then checkMatchingLeaves(obj[key])
      // if leafValue is undefined set it to obj[key]
      // check if leafValue is equal to obj[key] - otherwise return false
      // DEPTH FIRST SEARCH with recursion
  // call recursive function()
  // OUTPUT: return true if every property on `obj` is the same
  // otherwise return false
  let value;
  let match = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (value === undefined && typeof key !== 'object') {
        value = object[key];
      }
      if (typeof object[key] === 'object') {
        return checkLeaves(object[key]);
      }
      if (object[key] !== value) {
        match = false;
      }
    });
  };
  checkLeaves(obj);
  return match;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
