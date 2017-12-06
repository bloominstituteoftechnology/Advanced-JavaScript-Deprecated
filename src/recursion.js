// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let a = 1;
  let b = 0;
  let temp;

  while (n >= 0) {
    temp = a;
    a += b;
    b = temp;
    n--;
  }

  return b;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  const myArray = Array.from({ length: n + 1 }, (v, i) => i).reverse();
  myArray.pop();
  return myArray.reduce((acc, curr) => acc * curr, 1);
};


const leavesHelper = (obj, sample, result) => {
  Object.keys(obj).forEach((el) => {
    if (obj[el] !== sample && Object.values(obj[el]).length < 1) {
      result = false;
    } else if (Object.values(obj[el]).length > 0) {
      result = leavesHelper(obj[el], sample, result);
    }
  });

  return result;
};

/* Extra Credit */
const checkMatchingLeaves = (obj, result = false) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const sample = Object.values(obj)[0];
  result = true;
  const a = Object.keys(obj);

  a.forEach((el) => {
    if (obj[el] !== sample && Object.values(obj[el]).length < 1) {
      result = false;
    } else if (Object.values(obj[el]).length > 0) {
      result = leavesHelper(obj[el], sample, result);
    }
  });

  return result;
};


/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
