// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  return (n < 2) ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  return (n <= 1) ? 1 : n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const output = [];
  function deepSearch(arg = obj) {
    const keys = Object.keys(arg);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (typeof arg[k] !== 'object') output.push(arg[k]);
      if (typeof arg[k] === 'object') deepSearch(arg[k]);
    }
    return output.every(x => x === output[0]);
  }
  return deepSearch(obj);
};
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
