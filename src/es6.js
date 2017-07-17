/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

var food = 'pineapple';

const isMyFavoriteFood = (food) => {
  food = food || 'thousand-year-old egg'; //This sets a default value if `food` is falsey
  return food === 'thousand-year-old egg';
};

var isThisMyFavorite = isMyFavoriteFood(food);
console.log(isThisMyFavorite);
//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

const User = function(options) {
  this.username = options.username;
  this.password = options.password;
  this.sayHi = function() {
    return this.username + ' says hello!';
  };
}

var username = 'JavaScriptForever';
var password = 'password';

var me = new User({
  username: username,
  password: password,
});
console.log(me.sayHi());
// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (...argument) => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const argsToCb = (cb) => {
  const args = Array.prototype.slice.call(arguments);
  return cb.apply(null, args.splice(1));
};

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
