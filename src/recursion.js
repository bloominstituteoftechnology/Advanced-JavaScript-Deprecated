// Complete the following functions.

const nFibonacci = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return (nFibonacci(n - 1) + nFibonacci(n - 2));
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

const nFactorial = (n) => {
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
//   for (const key in obj) {
//     for (const key2 in obj) {
//       if (typeof(key) === object) {
//         const keyBool = checkMatchingLeaves(key);
//       }
//       if (typeof(key2) === object) {
//         const key2Bool = checkMatchingLeaves(key2);
//       }
//       if ((key !== key2) || keyBool || key2Bool) {
//         return false;
//       }
//     }
//   } return true;
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
