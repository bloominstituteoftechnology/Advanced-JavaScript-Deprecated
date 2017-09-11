/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

const food = 'pineapple';

function isMyFavoriteFood(food = 'thousand-year-old egg') {
  return food === 'thousand-year-old egg';
}

const isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

class User {
  constructor(options){
    this.username = options.username;
    this.password = options.password;
  }

  sayHi(){
    return `${this.username} says hello!`;
  }
}

const me = new User({
  username: username,
  password: password,
});

// ----------------
// let, const, =>, ... (spread operator)

function addArgs() {
  let sum = 0;
  for(let arument of arguments){
    sum+=argument;
  }
  return sum;
}

function argsToCb(cb, ...args) {
  return cb.apply(null, ...args);
}

var result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
