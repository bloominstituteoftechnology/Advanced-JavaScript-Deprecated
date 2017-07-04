// sample data to iterate through
const someArray = [1, 2, 3, 4, 5];

// sample callback to be used
const callBack = (sum, num) => {
  return sum += num;
};

// this function is...
const reduce = (elements, cb, memo) => {
  
  // to add up the numbers/stuff/whatever
  let sum;
  
  // if there is no memo
  if (memo === undefined) {

    // make the sum variable the 1st element in the array
    sum + elements[0];
  } else {

    // make the sum variable the value of memo
    sum + memo;
  }

  // loop through the array
  for (let i = 0; i < elements.length; i++) {

    // add the result of the callback to the sum variable
    sum = cb(sum, elements[i]);

    // check to see if this is actually working
    // console.log(sum);

  }

  // return this damn sum variable
  return sum;
};

// starting from 0
console.log(reduce(someArray, callBack, 0));
//=> 15

// starting from 5
console.log(reduce(someArray, callBack, 5));
//=> 20

// starting from elements[0]
console.log(reduce(someArray, callBack));
//=> 16

  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

const arrayOfTruth = [1, 'Hello', 2, false, 3, undefined, 4, {}, 5, true ];
const arrayOfLies = ['Hello', false, undefined, {}, true];

const isNum = (x) => {
  return typeof x === 'number';
};

const filter = (elements, cb) => {
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr.push(elements[i]);
    }
  } return arr;

  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};
console.log(filter(arrayOfTruth, isNum))
console.log(filter(arrayOfLies, isNum))






const notSoCrazyArr = [[1], [2], [3], [4], [5]];
const crazyArr = [1, [2], [3, [[4]]]];

// Flattens a nested array (the nesting can be to any depth).
const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
      console.log(newArr);
    } else {
      newArr.push(arr[i]);
      console.log(newArr);
    }
  }
  return newArr;
};

console.log(flatten(notSoCrazyArr));
//=> [1, 2, 3, 4, 5]

console.log(flatten(crazyArr));
//=> [1, 2, 3, 4]
