// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  if (n < 2) {
    return 1;
  }

  return (nFibonacci(n - 2) + nFibonacci(n - 1));
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

  let prior;

  const check = (o) => {
    const properties = Object.getOwnPropertyNames(o);

    for (let i = 0; i < properties.length; i++) {
      const value = o[properties[i]];

      if (value instanceof Object) {
        const result = check(value);

        if (result === false) {
          return false;
        }
      } else if (prior === undefined) {
        prior = value;
      } else if (value !== prior) {
        return false;
      }
    }

    return true;
  };

  return check(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
