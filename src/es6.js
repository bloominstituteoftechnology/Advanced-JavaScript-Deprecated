/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

const food = 'pineapple';

const isMyFavoriteFood = (food) => {
  food = food || 'thousand-year-old egg'; //This sets a default value if `food` is falsey
  return food === 'thousand-year-old egg';
};

const isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

class User {
<<<<<<< HEAD
  constructor (options) {
  this.username = options.username;
  this.password = options.password;
  this.sayHi = function() {
    return `${this.username} says hello!`;
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  };
}
}
const username = 'JavaScriptForever';
const password = 'password';

<<<<<<< HEAD
const me = new User({ username, password });
=======
User.prototype.sayHi = function() {
  return `${this.username} says hello!`;
}

const username = 'JavaScriptForever';
const password = 'password';

const me = new User({username, password});
>>>>>>> 0c8b8c99aa95cbe366257806775ed8597b1ad216

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const argsToCb = (cb, ...args) => {
  return cb(...args);
};

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
