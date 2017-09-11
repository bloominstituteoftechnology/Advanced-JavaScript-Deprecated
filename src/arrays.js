// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

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
  // elementseach(elements)
  for (let i = 0; i < elements.length; i++) {
    elements[i] = cb(elements[i]);
  }
  return elements;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  // each(elements, cb);
  // while (!undefined) {
  //   memo = cb(elements.shift());
  // }
  // return memo;
  // for (let i = 0; i < elements.length; i++) {
  //   memo += cb(elements[i]);
  // }
  // return memo;
  // recursive
  // if (elements.length === 0){
  //   return memo;
  // }
  // return reduce(elements, cb, memo = elements.shift())
  if (memo === undefined) {
    memo = elements[0];
  }
  for (let i = 0; i < elements.length; i++) {
    // elements[i] = cb(elements[i]);
    memo = cb(elements[i]);
  }
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
  return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr.push(elements[i]);
    }
  }
  return arr;
};

/* Extra Credit */
const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (typeof (elements[i]) === 'object') {
      // pop array el, and iterate, and concate elements to original array
      const arrayToBeBroken = elements.splice(i, 1)[0];
      return flatten([...elements, ...arrayToBeBroken]);
    }
  }
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
