// Complete the following functions.
// These functions only need to work with arrays.

/* eslint-disable no-unused-vars, max-len */

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  elements.forEach((e, i) => {
    cb(e, i);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const pam = elements.map((e, i) => cb(e, i));
  return pam;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  if (memo === undefined) {
    memo = 0;
  }
  return elements.reduce(cb, memo);
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      return elements[i];
    }
  }
  return undefined;
};
  // const i = elements.forEach((n) => { cb(n); });
  // let x = 0;
  // if (i) {
  //   x = i;
  // } else {
  //   x = undefined;
  // }
  // return x;

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const arr = [];
  each(elements, (e) => {
    const cbE = cb(e);
    if (cbE === true) arr.push(e);
  });
  return arr;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // const flat = [].concat(...elements);
  // return flat;
  const flat = [].concat(...elements);
  return flat.some(Array.isArray) ? flatten(flat) : flat;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
