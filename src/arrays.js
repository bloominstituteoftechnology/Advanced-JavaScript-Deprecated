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
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  if (memo === undefined) {
    memo = elements[0];
    for (let i = 1; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    }
    return memo;
  } else {
      for (let i = 0; i < elements.length; i++) {
        memo = cb(memo, elements[i]);
      }
      return memo;
  }
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  const temp = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      temp.push(elements[i]);
    }
  }
  if (temp.length === 0) {
    return undefined;
  }
  return temp[0];
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const temp = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      temp.push(elements[i]);
    }
  }
  return temp;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flat = [];
  for (let i = 0; i < elements.length; i++) {
    if (!Array.isArray(elements[i])) {
      flat.push(elements[i]);
    } else if (Array.isArray(elements[i])) {
      elements = elements.concat(elements[i]);
    }
  }
  return flat;
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
