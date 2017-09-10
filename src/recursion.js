// Complete the following functions.
const arrays = require('./arrays');
const objects = require('./objects');

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  return n < 2 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  return n === 1 ? 1 : n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const flattenToArr = (ob) => {
    const objValues = objects.values(ob);

    return arrays.reduce(objValues, (ret, value) => {
      if (typeof value === 'object') {
        return ret.concat(flattenToArr(value));
      }
      return ret.concat(value);
    }, []);
  };

  const flatValues = flattenToArr(obj);

  for (let i = 0; i < flatValues.length; i++) {
    if (flatValues[i] !== flatValues[0]) {
      return false;
    }
  }

  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
