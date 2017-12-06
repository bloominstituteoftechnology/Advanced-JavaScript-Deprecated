// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], i, elements);
    }
  } else if (elements === null) {
    return elements;
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const result = [];

  each(elements, (item) => {
    result.push(cb(item));
  });

  return result;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  let memoUndefined = arguments.length < 3;
  each(elements, (element, index) => {
    if (memoUndefined) {
      memoUndefined = false;
      memo = element;
    } else {
      return memo = cb(memo, element, index);
    }
  });

  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  const arr = [];

  each(elements, (element, index) => {
    if (cb(element, index)) {
      arr.push(element);
    }
  });

  if (arr.length === 0) {
    return undefined;
  }

  return arr[0];
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const arr = [];
  each(elements, (element, index) => {
    if (cb(element, index)) {
      arr.push(element);
    }
  });

  return arr;
};

/* Extra Credit */
const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  each(elements, (element) => {
    if (Array.isArray(element)) {
      elements = flatten([].concat([], ...elements));
    }
  });

  return elements;
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
