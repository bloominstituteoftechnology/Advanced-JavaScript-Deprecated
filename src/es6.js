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
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  sayHi() {
    return `${this.username} says hello!`;
  }
}

const bob = new User({ username: 'bob', password: 'test234'})

let username = 'JavaScriptForever';
let password = 'password';

const me = new User({
  username,
  password,
});

console.log(me.username);
console.log(me.password);
console.log(me.sayHi());

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(addArgs(4,5,6,4))

const argsToCb = (cb, ...args) => {
  // args must be second parameter in function call
  // ...args, cb will not work
  return cb (...args);
};

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15
console.log(result);
/* eslint-enable */
