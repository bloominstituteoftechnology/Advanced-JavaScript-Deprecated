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

  // declare result array object to be returned.
  const result = [];
  // loop over the elements
  for (let i = 0; i < elements.length; i++) {
    // invoke cb function on elements
    result.push(cb(elements[i]));
    // push result to result array
  }
  // return result array
  return result;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

  // cb(memo, elements[0]);
  let result = memo;
  // const initialValue = memo;

  if (elements.length > 1) {
    // Loop over the array
    for (let i = 0; i < elements.length; i++) {
      // call the cb function on current element in elements.
      result = cb(result, elements[i]);
      // call shift on elements
      // save returned value to memo.
      // memo = result;
    }
  }
  return result;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  // Loop through elements array.
  for (let i = 0; i < elements.length; i++) {
    // Check truth statement of the callback.
    // Return the value when the callback is true.
    if (cb(elements[i])) {
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  // Create a result array that stores all the values that will be returned.

  const result = [];
  // Loop Through the elements array.
  for (let i = 0; i < elements.length; i++) {
    // Push elements that pass the test to the result array.
    if (cb(elements[i])) {
      result.push(elements[i]);
    }
  }
  // Return the result array.
  return result;
};

/* Extra Credit */
const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let result = [];

  function getValues(element, res = []) {
      // loop over all elements in array
    for (let i = 0; i < element.length; i++) {
      if (typeof element[i] === 'object') {
        res = getValues(element[i], result);
      } else {
        res.push(element[i]);
      }
    }
    return res;
  }

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === 'object') {
      result = getValues(elements[i], result);
    } else {
      result.push(elements[i]);
    }
  }

  // result = elements.map(getValues);
  return result;
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
