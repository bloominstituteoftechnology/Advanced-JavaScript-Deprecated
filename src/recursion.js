// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n > 0) {
    return n * nFactorial(n - 1);
  }
  return 1;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let resultArray = [];
  function getUniqueAsArray(arr) {
    const set1 = new Set(arr);
    const arr1 = [...set1];
    return arr1;
  }
  function checkValuesForEquality(arr) {
    const sameTest = getUniqueAsArray(arr).length === 1;
    // console.log(`Check: Are values same? Result: ${sameTest}`);
    return sameTest;
  }
  // values = Object.values(obj);
  function recurCheck(obj1, arr) {
    const vals = Object.values(obj1);
    vals.forEach((item) => {
      if (typeof item === 'object') {
        arr = recurCheck(item, arr);
      } else {
        arr.push(item);
      }
    });
    return arr;
  }
  const values1 = Object.values(obj);
  values1.forEach((va) => {
    if (typeof va === 'object') {
      resultArray = recurCheck(va, resultArray);
    } else {
      resultArray.push(va);
    }
  });
  return checkValuesForEquality(resultArray);
};
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
