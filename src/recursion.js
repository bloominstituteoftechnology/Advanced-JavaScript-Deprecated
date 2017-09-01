// Complete the following functions.

const _ = require('underscore');

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 2) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  /*
    I'm sorry I could not solve this so I just used recursion in
    part of a working solution. Do I have to use checkMatchingLeaves
    with only 1 argument? Is that possible? I could do a different
    solution but I feel like I need lastleaf as an argument as well.
    Help with this problem would be greatly appreciated. I'm not a
    recursion wizard.
  */
  const results = [];
  const recflatten = (anobj) => {
    const objvals = _.values(anobj);
    for (let i = 0; i < objvals.length; i++) {
      if (typeof objvals[i] !== typeof {}) {
        results.push(objvals[i]);
      } else {
        recflatten(objvals[i]);
      }
    }
  };
  recflatten(obj);
  for (let i = 1; i < results.length; i++) {
    if (results[0] !== results[i]) {
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
