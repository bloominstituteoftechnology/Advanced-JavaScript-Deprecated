/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

//var food = 'pineapple';
const food = 'pineapple';
//console.log(food); - it works
//var isMyFavoriteFood = function(food) {
 // food = food || 'thousand-year-old egg'; //This sets a default value if `food` is falsey
  //return food === 'thousand-year-old egg';
//};
const isMyFavoriteFood = (food = 'thousand-year-old egg') =>  food;
//var isThisMyFavorite = isMyFavoriteFood(food);
const isThisMyFavorite = isMyFavoriteFood(food);
//console.log(isThisMyFavorite); --->works

//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

//var User = function(options) {
 // this.username = options.username;
  //this.password = options.password;
  //this.sayHi = function() {
    //return this.username + ' says hello!';
  //};
//}

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  sayHi() {
      return `${this.username} says hello!`;
  }
}
//var username = 'JavaScriptForever';
//var password = 'password';

//const username = 'JavaScriptForever';
//const password = 'password';
//var me = new User({
  //username: username,
  //password: password,
//});
const me = new User({
  username: 'JavaScriptForever',
  password: 'password',
});
//console.log(me); --->works

// let, const, =>, ... (spread operator)

//var addArgs = function () {
  //var sum = 0;
  //for (var i = 0; i < arguments.length; i++) {
    //sum += arguments[i];
  //}
  //return sum;
//};

let addArgs = (...args) => {
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  return sum;
};
//console.log(addArgs(1, 2, 3));  ----> works

//var argsToCb = function (cb) {
//var args = Array.prototype.slice.call(arguments); 
//return cb.apply(null, args.splice(1));
//};

// -----> come back and redo above block, if needed
//var result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

const stuff = [1, 2, 3, 4, 5]
const result = addArgs(...stuff);
//console.log(result); ---> works

/* eslint-enable */
