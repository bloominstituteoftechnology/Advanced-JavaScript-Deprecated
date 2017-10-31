// Create a class called User.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }

  comparePasswords(password) {
    if (password === this.password) {
      return true;
    }
    return false;
  }

}
/*eslint-disable no-undef */


// Create a class called `Animal` and a class called `Cat`.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age.

// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

class Animal {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
  growOlder() {
    return this.age;
  }
}
class Cat extends Animal {
  constructor(options) {
    super(name);
    this.name = options.name;
    this.age = options.age;
  }
  growOlder() {
    return this.age;
  }
  meow() {
    return `${this.name} meowed!`;
  }
}

module.exports = {
  User,
  Cat
};
