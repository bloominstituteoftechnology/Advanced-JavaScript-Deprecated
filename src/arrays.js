// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  // version 1
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i); // I AM CONFUSED, WHY DOES CB TAKE 2 PARAMETERS???
  }

  // version 2 - try with forEach √
  // elements.forEach((value, index) => {
  //   cb(value, index);
  // });

  // version 3 - NOPE - OH, HA! I'd have to install underscore for this to work...
  // _.each(elements, (value, index) => {
  //   cb(value, index); // <--- ??? Not sure that's it, how to return index?
  // });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  // version 1
  // const newArray = new Array();
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  // version 1
  // if (memo === undefined) {
  if (memo === null) {
    // memo = elements[0];
    // memo = 0;
    memo = elements.shift();
  }
  let value = 0;
  for (let i = 0; i < elements.length; i++) {
    value += elements[i];
    // value += cb(elements[i]);
  }
  return value;
  // return elements.reduce(cb, memo);

  // version 2
  // memo = memo || 0;
  // const test = elements.reduce(cb, memo);
  // return test;

  // version 3
  // if (!memo) memo = elements.shift();
  // // if (!memo) memo = elements[0]; // WHY DOESN'T THIS WORK???
  // elements.forEach((item, index) => {
  //   memo = cb(memo, item);
  // });
  // return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  // version 1
  // for (let i = 0; i < elements.length; i++) {
  //   if (cb(elements[i]) === true) {
  //     return cb(elements[i];
  //   } else return undefined;
  // }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  // version 1
  const trueArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      trueArray.push(cb(elements[i]));
    }
  }
  return trueArray;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // version 1
  // const flat = [];
  // for (let i = 0; i < elements.length; i++) {
  //   const temp = elements[i];
  //   for (let j = 0; j < temp.length; j++) {
  //     flat.push(temp[j]);
  //   }
  // }
  // return flat;

  // version 2
  // const flat = [];
  // return flat.flatten(elements);

  // version 3
  // const flattened = elements.reduce((a, b) => {
  //   return a.concat(b);
  // }, []);
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
