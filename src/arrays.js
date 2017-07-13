// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each

  elements.forEach((item, index) => {
    cb(item, index);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  const myArray = elements.map((item, index) => {
    return cb(item, index);
  });

  return myArray;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

  // let sum;
  // if (memo === undefined) sum = elements[0];
  // memo.reduce((sum, elements) => {
  //   return cb(elements);
  // });

  // if (memo === undefined) {
  //   memo = elements[0];
  // }
  // for (let i = 0; i < memo.length; i++) {
  //   memo.push.cb(elements);
  // }
  if (!memo) {
    memo = elements[0];
  }
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  for (let i = 0; i < elements.length; i++) if (cb(elements[i]) === true) return elements[i];
  return 'undefined';
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) arr.push(elements[i]);
  }
  return arr;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      arr = arr.concat(flatten(elements[i]));
    } else arr.push(elements[i]);
  } return arr;
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
