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
    cb(elements[i], i, elements); // was originally cb(elements[i]), the only reason why I refactored was because the signature for
    // the cb invocation is given in underscore.  No directions are given regarding following underscore, only that this exercise, or rather, just "something"
    // is based off of underscorejs
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const out = [];
  each(elements, (el) => {
    out.push(cb(el));
  });
  return out;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  each(elements, (el) => {
    memo = cb(memo, el);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  //
  //
  // REVIEW PREVIOUS COMMIT VERSION USING BUILT EACH FUNCTION AND BRING UP DURING A Q & A
  //
  //
  each(elements, (el) => {
    if (cb(el)) {
      return el;
    }
    return undefined;
  });
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const out = [];
  each(elements, (el) => {
    if (cb(el) === true) out.push(el);
  });
  return out;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

// we want to recursively flatten layers
/*
 * establish base case
 * if array has no arrays as elements return array (test for 'has or has not' involves iteration)
 * create master array
 * for each element in array
 *   combine the result of flatten array to master array
 * return flatten on master array
 *
 * alternative
 *
 *
 *
 * the recursive call will return a number while base case returns an array
 */
  // easiest case [1] =>  [1]
  // next easiest case [1, [2,2,3]] etc. => [1,2]
  // [1]
  // [1,[2]]
  // create empty output array // []
  // if the current input with var name array is not an array
  //   assign output array to [input]
  //   return output array
  // iterate over inputted array(for each) // elements = [2,2,3], curr = 2 out2 = [2,2,3]
  //   concatenate to output array the return value of running flatten for the current input // output = [1]
  // return output array
  //
  // new stack
  // iterate over [2,2,3]
  //
  // [1,[2]]
  let newArr = []; // this is what the function will at the end return
  if (!Array.isArray(elements)) { // elements = [1]  // els2 = [2]
    newArr = [elements];  //
    return newArr;
  }
  elements.forEach((el) => { // newArr = [1], el = [2] // el = 2
    newArr = newArr.concat(flatten(el));// newArr = [1].concat([2]) => [1,2]
  });
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
