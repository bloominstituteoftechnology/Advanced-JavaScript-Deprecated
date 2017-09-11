// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  const f = (x) => {
    if (x <= 0) return 0;
    if (x === 1) return 1;
    return f(x - 2) + f(x - 1);
  };
  n++;
  return f(n);
};
// console.log(nFibonacci(4));
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};
// console.log(nFactorial(5));
/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const x = Object.keys(obj);
  // console.log(x);
  const n = x.length;
  // console.log(n);
  const store2 = Object.keys(obj)[0];
  const store = obj[store2];
  // console.log(store);
  const c = (o, y) => {
    // console.log('iteration');
    if (y === 0) return true;
    y--;
    // console.log(y);
    // console.log(obj[Object.keys(obj)[y]] === store);
    if (typeof o[Object.keys(o)[0]] === 'object') {
      const bool = c(o[Object.keys(o)[0]], Object.keys(o[Object.keys(o)[0]]).length);
      if (!bool) return bool;
    }
    if (o[Object.keys(o)[y]] === o[Object.keys(o)[0]]) {
      return c(o, y);
    }
    return false;
  };
  return c(obj, n) === true;
};
// console.log(checkMatchingLeaves({ num: 1, hi: 1, hey: 1 }));
// // console.log(checkMatchingLeaves{num: 1}());
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
