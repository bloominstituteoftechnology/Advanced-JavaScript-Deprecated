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
  let first = null;
  let list = false;
  let keys = null;
  let sub = false;

  // Check if it's a first loop or not.
  if (Object.prototype.hasOwnProperty.call(obj, 'first') && Object.prototype.hasOwnProperty.call(obj, 'obj')) {
    // subloop...
    first = obj.first;
    list = obj.obj;
    keys = Object.getOwnPropertyNames(list);
    sub = true;
  } else {
    // first loop
    // first item may not be value but be sublist
    // find first instance of a value and set.
    list = obj;
    keys = Object.getOwnPropertyNames(list);
    let tick = 0;
    while (first === null) {
      if (typeof list[keys[tick]] !== 'object') first = list[keys[tick]];
      tick += 1;
    }
  }

  for (let i = 0; i < keys.length; i++) {
    // if the type of item is an object, recurse it.
    if (typeof list[keys[i]] === 'object') {
      // recursion here.  getting back the value of true or false and sending with first item.
      const thistime = checkMatchingLeaves({ first, obj: list[keys[i]] });
      // if the value of the recursion is false, it doesn't match to the sent first and fail here
      if (thistime !== true) return false;
    } else if (first !== list[keys[i]]) {
      // if the type is anything other than object, check against the value of first
      // if it's false, it fails here
      return false;
    }
  }
  // returns true by default because none of the checks failed at the end of looking at every item.
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
