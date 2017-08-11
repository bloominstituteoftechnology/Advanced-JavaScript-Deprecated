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
  comparePasswords(x) {
    return this.password === x;
  }
}

const me = new User({ email: 'email@email.com', password: 'p4$sw0rd' });
console.log(me.comparePasswords('passwerd')); // false

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
    this.age = options.age;
  }
  growOlder() {
    return (this.age += 1);
  }
}

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
  meow() {
    return `${this.name} meowed!`;
  }
}

const jeff = new Cat({ age: 5, name: 'Jeff' });
console.log(jeff.growOlder());
console.log(jeff.meow());

// class & extends practice

class Human {
  constructor(options) {
    this.type = options.type;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
  }
}

class Person extends Human {
  constructor(options) {
    super(options);
  }
  greet() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }
}

const frank = new Person({
  type: 'human',
  firstName: 'Frank',
  lastName: 'Faustino',
});
frank.greet();
console.log(frank);
console.log(frank.type);

module.exports = {
  User,
  Cat,
};
