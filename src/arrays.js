// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
};

const reduce = (elements, cb, memo) => {
  if (memo === undefined) {
    memo = elements[0];
    for (let i = 1; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    }
    return memo;
  }
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
  return undefined;
};

const filter = (elements, cb) => {
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) arr.push(elements[i]);
  }
  return arr;
};

// const notSoCrazyArr = [[1], [2], [3], [4], [5]];
// const crazyArr = [1, [2], [3, [[4]]]];
const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
// console.log(flatten(notSoCrazyArr));
// //=> [1, 2, 3, 4, 5]
// console.log(flatten(crazyArr));
// // //=> [1, 2, 3, 4]

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
