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
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};
/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const checkBox = [];
  function checkNested(subObj) {
    for (let i = 0; i < Object.keys(subObj).length; i++) {
      if (typeof subObj[Object.keys(subObj)[i]] !== 'object') checkBox.push(subObj[Object.keys(subObj)[i]]);
      if (typeof subObj[Object.keys(subObj)[i]] === 'object') checkNested(subObj[Object.keys(subObj)[i]]);
    }
    return checkBox.every(allkeys => allkeys === checkBox[0]);
  }
  return checkNested(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
