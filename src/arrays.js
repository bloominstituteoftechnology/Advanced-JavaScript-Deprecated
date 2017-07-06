// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each

  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  const arr = [];

  each(elements, el => arr.push(cb(el)));

  // WRONG; should use `each'
  // for (let i = 0; i < elements.length; i++) {
  //   arr[i] = cb(elements[i]);
  // }

  return arr;
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

  for (let i = start; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }

  // WRONG: should not change state, so use for loop with changing initial position
  // each(elements, el => memo = cb(memo, el));

  // WRONG: changed state by shifting off elements[0]
  // let reduced = (memo === undefined) ? elements.shift() : memo;

  // for (let i = 0; i < elements.length; i++) {
  //   reduced += elements[i];
  // }

  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  const filtered = [];

  each(elements, (el) => {
    if (cb(el)) { filtered.push(el); }
  });

  // WRONG: should use `each'
  // for (let i = 0; i < elements.length; i++) {
  //   if (cb(elements[i])) {
  //     filtered.push(elements[i]);
  //   }
  // }

  return filtered;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // Thanks to Karthik Viswanathan for the following code:

  let result = [];

  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      result = result.concat(flatten(elem));
    } else {
      result.push(elem);
    }
  });

  return result;

  // WRONG; use `each' plus better recursion
  // const flattener = (els, arr) => {
  //   if (els.length > 0) {
  //     const el = els.shift();
  //     if (el instanceof Array) {
  //       flattener(el, arr);
  //     } else {
  //       arr.push(el);
  //     }

  //     flattener(els, arr);
  //   }

  //   return arr;
  // };

  // return flattener(elements, []);
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
