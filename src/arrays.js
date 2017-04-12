// Complete the following functions.
// These functions only need to work with arrays.

/* eslint-disable no-unused-vars, max-len */

const each = (elements, cb) => elements.forEach(cb);
  // {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  // };

const map = (elements, cb) => elements.map(cb);
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  //   const test =
  //   return test;
  // };

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  memo = memo || 0;
  const test = elements.reduce(cb, memo);
  return test;
  // const test = elements.reduce((val, val2) => val + val2);
  // return test = elements.reduce((val, val2) => cb(val2), memo);
};

const find = (elements, cb) => elements.find(cb);
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  // const test = elements.map(cb)

const filter = (elements, cb) => elements.filter(cb);
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

const flatten = elements => elements.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  //   elements.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
  // };

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
