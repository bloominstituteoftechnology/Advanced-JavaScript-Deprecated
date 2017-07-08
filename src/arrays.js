// Complete the following functions.
// These functions only need to work with arrays.

// each() implemented as a tail-recursive loop;
// reduce() cannot use each() because each() does not have a default index
const forEach = (elements, cb, i = 0) => {
  if (i >= 0 && i < elements.length) {
    cb(elements[i], i);
    return forEach(elements, cb, i + 1); // tail call
  }
};

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each

  return forEach(elements, cb); // a tail call since forEach is tail-recursive
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  const mapped = [];
  forEach(elements, elem => mapped.push(cb(elem)));
  return mapped;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

  let start = 0;
  if (memo === undefined) {
    memo = elements[0];
    start = 1;
  }

  forEach(elements, (elem) => { memo = cb(memo, elem); }, start);
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  // tail-recursive
  const finder = (i = 0) => {
    if (i < elements.length) {
      if (cb(elements[i])) return elements[i];
      return finder(i + 1);
    }
    return undefined;
  };
  return finder(); // tail call since finder() is tail-recursive
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  const filtered = [];
  forEach(elements, (elem) => {
    if (cb(elem)) { filtered.push(elem); }
  });
  return filtered;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // Thanks to Karthik Viswanathan for the following code:

  let flattened = [];

  forEach(elements, (elem) => {
    if (Array.isArray(elem)) {
      flattened = flattened.concat(flatten(elem));
    } else {
      flattened.push(elem);
    }
  });

  return flattened;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  forEach,
  map,
  reduce,
  find,
  filter,
  flatten
};
