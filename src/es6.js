/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

const food = 'pineapple';

const isMyFavoriteFood = (food = 'thousand-year-old egg') => {
  return food === 'thousand-year-old egg';
};

const isThisMyFavorite = isMyFavoriteFood();

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

class User {
  constructor({username, password}) {
  this.username = username;
  this.password = password;
  this.sayHi = () => `${this.username} says hello!`;
  };
}

var username = 'JavaScriptForever';
var password = 'password';

const me = new User({
  username,
  password,
});

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (...args) => {
  const sum = 0;
  return args.reduce((a, b) => a + b, sum);
};

const result = addArgs(1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
