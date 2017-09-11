class Fruit{
  constructor(type, color){
    this.getType = function(){return type};
    this.getColor = () => color;
  }
}

const apple = new Fruit("Apple", "Red");

// Fruit.prototype.message = () => `I am a ${this.getColor()} ${this.getType()}`;
// console.log(apple.message());
/**
  Uncaught TypeError: this.getColor is not a function
    at Fruit.message (<anonymous>:10:48)
    at <anonymous>:12:19
**/

Fruit.prototype.message = function() {
  return `I am a ${this.getColor()} ${this.getType()}`;
};

console.log(apple.message());
/**
  I am a Red Apple
**/

const orange = new Fruit("Orange", "Orange");

let fruitMessage = apple.message;

console.log(fruitMessage);
// [Function]

console.log(fruitMessage.call(orange));
// I am a Orange Orange
console.log(fruitMessage.apply(orange));
// I am a Orange Orange

// console.log(fruitMessage());
/** TypeError: this.getColor is not a function
  `this` is evaluated when the code is run rather than when
  the object is created. By calling fruitMessage() in this way,
  you have taken apple.message out of apple's scope and moved it
  into the global scope. `this.getColor()` is now looking for `getColor()`
  in the global scope which is undefined.
**/

fruitMessage = apple.message.bind(orange);
/** bind doesn't execute the function
  it hold onto it and will apply the `this` scope when you call it later
**/

console.log(fruitMessage);
// [Function]

console.log(fruitMessage());
// I am a Orange Orange!