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
  if (n === 1) {
    return n;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const trees = Object.keys(obj);
  let numberToCompare = 'zebra';

  function check(thingToCheck) {
    // is null?
    if (thingToCheck === null) {
      return false;
    }
    // is number?
    if (Number.isNaN(thingToCheck) === true) {
      return false;
    }
    if (typeof thingToCheck !== 'number') {
      // is object?
      if (typeof thingToCheck !== 'object') {
        return false;
      }
      // has children?
      if (Object.keys(thingToCheck).length > 0) {
        // how many children?
        // for stuff in thingToCheck ---> check(stuff)
        for (let i = 0; i < Object.keys(thingToCheck).length; i++) {
          if (check(thingToCheck[Object.keys(thingToCheck)[i]]) === false) {
            return false;
          }
        }
      }
    }
    if (typeof thingToCheck === 'number' && thingToCheck !== numberToCompare) {
      if (numberToCompare === 'zebra') {
        numberToCompare = thingToCheck;
      } else {
        return false;
      }
    }
    // If we got here we are a number and we match
    return true;
  }
  return check(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
