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
  // if (typeof n === 'number') n = { factorial: n, total: 1 };
  //
  // if (n.factorial > 1) {
  //   n.total *= n.factorial;
  //   n.factorial -= 1;
  //   return nFactorial(n);
  // }
  // return n.total;

  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const keys = Object.getOwnPropertyNames(obj);
  const first = obj[keys[0]];

  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') {
      return checkMatchingLeaves(obj[keys[i]]);
    }

    if (first !== obj[keys[i]]) {
      console.log(`first: ${first} : vlaue: ${obj[keys[i]]}`);
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
