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

  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;

  // return elements.reduce((accumulator, currentValue) => {
  //   cb(currentValue);
  //   return accumulator + currentValue;
  // }, memo || 0);
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  // return elements.find((x) => {
  //   if (cb(x)) return x;
  //   return undefined;
  // });
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
  // return undefined;
};

const filter = (elements, cb) => {
  // return elements.filter((x) => {
  //   if (cb(x)) return x;
  //   return undefined;
  // });
  const answer = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) answer.push(elements[i]);
  }
  return answer;
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

/* Extra Credit */
const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const answer = [];
  const flatt = (x) => {
    for (let i = 0; i < x.length; i++) {
      // console.log(i);
      // console.log(x[i]);
      // console.log(typeof x[i]);
      if (typeof x[i] === 'object') {
        flatt(x[i]);
      } else answer.push(x[i]);
    }
  };
  flatt(elements);
  return answer;
};
// const newarr2 = [1,2,3,4,[5,[6], [[[[[[7]]]]]]]];
// console.log(flatten(newarr2));

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
