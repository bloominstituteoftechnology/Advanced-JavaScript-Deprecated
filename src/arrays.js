// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  // version 1
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i); // I AM CONFUSED, WHY DOES CB TAKE 2 PARAMETERS??? Arbitrary - just emulating forEach
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
  // version 1 √
  // // const newArray = new Array();
  // const newArray = [];
  // for (let i = 0; i < elements.length; i++) {
  //   newArray.push(cb(elements[i]));
  // }
  // return newArray;

  // version 2 √
  // solution using previous function
  // const results = [];
  // each(elements, (item) => { // <---- Calls above "each" method *****************************
  //   results.push(cb(item));
  // });
  // return results;

  // version 3 √
  // solution using map() - map returns a new array of elements
  return elements.map(cb);
};

// Modifying the parameter with a default value:
// const reduce = (elements, cb, memo = elements.shift()) => {
//   for (let i = 0; i < elements.length; i++) {
//     memo = cb(memo, elements[i]);
//   }
//   return memo;
// };
const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  // version 1 √
  // elements NOT passed into cb
  let sum;
  if (typeof (elements[0]) === 'number') {
    sum = 0;
    if (memo) sum = memo;
  } else if (typeof (elements[0]) === 'string') {
    sum = '';
    if (memo) sum = memo;
  }
  for (let i = 0; i < elements.length; i++) {
    sum += elements[i];
  } return sum;

  // version 2 √
  // elements passed into cb
  // let sum;
  // if (typeof (elements[0]) === 'number') {
  //   sum = 0;
  //   if (memo) sum = memo;
  // } else if (typeof (elements[0]) === 'string') {
  //   sum = '';
  //   if (memo) sum = memo;
  // }
  // for (let i = 0; i < elements.length; i++) {
  //   sum = cb(sum, elements[i]);
  // } return sum;

  // version 3
  // solution using reduce()
  // const total = elements.reduce(cb, memo);
  // return total;

  // Ryan's solution √
  // no string/number check, nice!
  // if (memo === undefined) {
  //   memo = elements[0];
  //   for (let i = 1; i < elements.length; i++) {
  //     memo = cb(memo, elements[i]);
  //   }
  //   return memo;
  // }
  // for (let i = 0; i < elements.length; i++) {
  //   memo = cb(memo, elements[i]);
  // }
  // return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  // version 1 √
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      return elements[i];
    }
    // return undefined; // WTF? Why does commenting this out make it pass?????
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  // version 1 √
  const trueArray = []; // ----> WHY ISN'T THIS let???
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      trueArray.push(elements[i]);
    }
  }
  return trueArray;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // version 1 √
  let flat = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] instanceof Array) {
      // flat = flat.push(flatten(elements[i]));
      flat = flat.concat(flatten(elements[i]));
    } else {
      flat.push(elements[i]);
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
