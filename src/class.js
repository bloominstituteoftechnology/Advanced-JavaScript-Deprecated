// Create a class called User.
class User {
// The constructor of the class should have a parameter called `options`.
  constructor(options) {
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
    this.email = options.email;
    this.password = options.password;
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
    this.comparePasswords = (potentialPassword) => {
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property. Otherwise return false.
      if (potentialPassword === this.password) {
        return true;
      } return false;
    };
  }
}

/* eslint-disable no-undef */ // Remove this comment once you write your classes. 


// Create a class called `Animal` and a class called `Cat`.
class Animal {
// Animal and Cat should both have a parameter called `options` in their constructors.
  constructor(options) {
    this.age = options.age;
    this.name = options.name;
    this.growOlder = (years) => {
      return this.age + 1;
    };
  }
}

class Cat extends Animal {
  meow() {
    return `${this.name} meowed!`;
  }
}
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.


module.exports = {
  User,
  Cat
};
