// Complete the following functions.
// These functions only need to work with arrays.

/* eslint-disable no-unused-vars, max-len */

// const each = (elements, cb) => elements.forEach((el, index) => cb(el, index));
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

// const map = (elements, cb) => elements.map(el => cb(el));
const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i], i));
  }
  return arr;
};

// const reduce = (elements, cb, memo = 0) => elements.reduce((tot, el) => cb(tot, el), memo);
const reduce = (elements, cb, memo = 0) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  //  const result = arrayMethods.reduce(arr, (memo, num) => (memo + num), 10);
  let sum = memo;

  for (let i = 0; i < elements.length; i++) {
    sum = cb(sum, elements[i]);
  }
  return sum;
};

// const find = (elements, cb) => elements.find(el => cb(el));
const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  let val;

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      val = elements[i];
      break;
    }
    val = undefined;
  }
  return val;
};

// const filter = (elements, cb) => elements.filter(el => cb(el));
const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const passed = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) passed.push(elements[i]);
  }
  return passed;
};

const flatten = elements => elements.reduce(
  (arr, el) => arr.concat(Array.isArray(el) ? flatten(el) : el), []);
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];


/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
