/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()
const arrayMethods = require('../src/arrays');

let food = 'pineapple';

const isMyFavoriteFood = (food) => (food || 'thousand-year-old egg') === 'thousand-year-old egg';

const isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
    this.sayHi = () => `${this.username} says hello!`;
  }
}

const username = 'JavaScriptForever';
const password = 'password';

const me = new User({ username, password });

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (...rest) => arrayMethods.reduce(...rest, (total, num) => total += num);

const argsToCb = (cb, ...rest) => cb(...rest);

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
// console.log(isThisMyFavorite); // false
// console.log(me);               // User {.......}
// console.log(me.sayHi());       // JavaScriptForever says hello!
// console.log(result);           // 3
