// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  return (n < 2) ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  return (n < 2) ? 1 : n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  let firstValue; // starts as undefined; set just once as the first value encountered

  // helper function with firstValue in scope; it is invoked just once
  const check = (o) => {
    const properties = Object.getOwnPropertyNames(o);

    /* checker() invoked recursively;
       checks all properties and values at any one level against firstValue;
       it bails with false immediately upon finding a different value;
       it returns true after all properties have successfully matched firstValue;
       this should be a tail-recursive loop, so very efficient; */

    const checker = (i = 0) => {
      if (i === properties.length) return true; // all properties successfully checked, so return true; tail call

      const value = o[properties[i]];

      if (value instanceof Object) { // recurse upon finding an object
        if (!check(value)) {
          return false; // bail immediately upon encountering a false in an upper level; tail call
        }
      } else if (!firstValue) firstValue = value; // set  the first value only once
      else if (value !== firstValue) return false; // bail with a false if a value does not equal the first value; tail call

      return checker(i + 1); // continue with the next property; this is a tail call, so will not increase stack size
    };

    // initial invocation of the tail-recursive function checker()
    return checker(); // tail call
  };

  // only invocation of the helper function
  return check(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
