/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

let food = 'pineapple'; // false

const isMyFavoriteFood = (food) => { 
  food = food || 'thousand-year-old egg'; //This sets a default value if `food` is falsey
  return food === 'thousand-year-old egg';
};

let isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)


class User { 
  constructor(options) {
  this.username = options.username;
  this.password = options.password;
}
  sayHi() {
    return `${this.username} says hello!`;
  }; 
} 

let username = 'JavaScriptForever';
let password = 'password';

const me = new User({
  username,
  password
});

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const argsToCb = (cb) => {
  let args = Array.prototype.slice.call(arguments);
  return cb(...args);
};

let result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
