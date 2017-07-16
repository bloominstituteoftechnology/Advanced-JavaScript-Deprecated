// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // 1,   2,   3,   5,   8,   13,  21,  34,  etc... (Fibbonacci values)
  // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, etc... [position, nth Fibbo #]

  // version 1 √
  if (n < 2) return 1; // <--------------------------- ***BASE CASE***
  return nFibonacci(n - 2) + nFibonacci(n - 1); // <--- recursive call

  // // version 1.1 - ternary √
  // return (n < 2) ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);

  // // version 2 - non-recursive √
  // const fibArray = [1, 1];
  // for (let i = 2; i <= n; i++) {
  //   fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  // }
  // return fibArray[n];
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  // // version 1 √
  if (n === 1) return n;
  return n * nFactorial(n - 1);

  // // version 2: ternary solution √
  // // declare variableName = ifCondition ? thenThis : otherwiseThat;
  // const factorial = (n === 1) ? 1 : n * nFactorial(n - 1);
  // return factorial;

  // // version 2.1 √
  // return (n === 1) ? n : n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // version 1 √

  // // Ben's solution √
  // let val;
  // let allMatch = true;
  // const checkLeaves = (object) => {
  //   Object.keys(object).forEach((key) => {
  //     if (val === undefined && typeof key !== 'object') {
  //       val = object[key];
  //       return undefined;
  //     }
  //     if (typeof object[key] === 'object') return checkLeaves(object[key]);
  //     if (object[key] !== val) {
  //       allMatch = false;
  //       return undefined;
  //     }
  //     return undefined;
  //   });
  // };
  // checkLeaves(obj);
  // return allMatch;
};


/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
