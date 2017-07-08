/* eslint-disable */

// const, =>, default parameters, arrow functions default return statements using ()
const food = 'pineapple';
const isMyFavoriteFood = (food = 'egg') => food === 'egg';
const isThisMyFavorite = isMyFavoriteFood(food);

//const, class, template literals, enhanced object literals (foo: foo, -> foo,)
class User {
    constructor(options) {
        this.username = options.username;
        this.password = options.password;
    }
    sayHi() {
        return `${this.username} says hello!`
    }
}
const username = 'JavaScriptForever';
const password = 'password';
const me = new User({ 
    username, 
    password,
});

// let, const, =>, ... (spread operator)
const addArgs = (...args) => args.reduce((args, b) => args + b, 0);
const argsToCb = (cb, ...args) => cb.apply(null, args);
const result = argsToCb(addArgs, 1, 2, 3, 4, 5);

// test cases
console.log(isThisMyFavorite);
console.log(me.username);
console.log(me.password);
console.log(me.sayHi());
console.log(result);

/* eslint-enable */
