// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  elements.forEach((element, i) => {
    cb(element, i);
  });
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  return elements.forEach((element, i) => {
    return cb(element, i);
  });
};


const map = (elements, cb) => {
  const newArray = elements.map((element) => {
    return cb(element);
  });
  return newArray;
// come back to THISSSSS

  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  elements.forEach((element) => {
    newArray.push(cb(element));
  });
  return newArray;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  let sum = 0;
  let newStr = '';
  if (typeof memo === 'number') sum = memo;
  if (typeof memo === 'string') newStr = memo;
  if (typeof elements[0] === 'number') {
    for (let i = 0; i < elements.length; i++) {
      sum += elements[i];
    }
    return sum;
  }
  return newStr.concat(elements.join(''));
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) return elements[i];
  }
  return 'undefined';
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const newArr = [];
  elements.forEach((element) => {
    if (cb(element) === true) newArr.push(element);
  });
  return newArr;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArr = newArr.concat(flatten(elements[i]));
    }
    newArr.push(elements[i]);
  }
  return newArr;
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
