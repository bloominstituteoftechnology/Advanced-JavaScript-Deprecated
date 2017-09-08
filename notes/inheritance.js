/**
  Let's say we have a class Monster. This class will define all of our Monsters at a generic level.
  It will hold attributes that each Monster, be it a Zombie, a Skeleton, a Banshee, etc should have.
**/
class Monster {
  constructor(name, hitpoints, level, inventory, nickname) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.level = level;
    this.inventory = inventory || [];
    this.nickname = nickname;
  }
  getDisplayName() {
    return this.nickname || this.name; //if no nickname was provided, nickname will be undefined so name will be returned.
  }
  onAttack() {
    console.log(`${this.getDisplayName()} attacked for 1 damage.`);
  }
  onDamage() {
    console.log(`${this.getDisplayName()} took ${this.hitpoints - --this.hitpoints} damage!`);
    if (this.hitpoints <= 0) {
      this.onDeath();
    }
  }
  onDeath() {
    console.log(`${this.getDisplayName()} died!`);
    if(this.inventory.length > 0) {
      console.log(`${this.getDisplayName()} dropped: `);
      this.inventory.forEach((item) => console.log(`\t${item}`));
    } else {
      console.log(`${this.getDisplayName()} didn't drop anything :(`);
    }
  }
}

/**
  We now have the basic features a monster should have as well as default onAttack and onDamage methods that will apply to any
  Monsters that don't come with their own. Lets create our different Monsters and extend the Monster class so they all get these features.
**/
class Zombie extends Monster {
  constructor(stats) {
    // You call `super` which calls Monster's constructor and lets Zombie inherit everything from Monster
    super("Zombie", stats.hitpoints, stats.level, stats.inventory || ['sword'], stats.nickname);
    this.rotten = 'hella';
  }
}

class Skeleton extends Monster {
  constructor(hitpoints, level, inventory = ["bow"], nickname) {
    // You call `super` which calls Monster's constructor and lets Skeleton inherit everything from Monster
    super("Skeleton", hitpoints, level, inventory, nickname);
  }
}

class Banshee extends Monster {
  constructor(hitpoints, level, inventory = undefined, nickname) {
    // You call `super` which calls Monster's constructor and lets Banshee inherit everything from Monster
    super("Banshee", hitpoints, level, inventory, nickname);
  }
  onAttack() {
    this.scream();
    // even though we are making our own onAttack method, we can still call the one from super
    super.onAttack();
  }
  scream() {
    console.log("AHHHHHH!!!!")
  }
}

// Set up our dope battle simulator right here
function battle(mon1, mon2) {
  if(Math.random() >= 0.5) {
    mon1.onAttack();
    mon2.onDamage();
  } else {
    mon2.onAttack();
    mon1.onDamage();
  }
}

// Now we make some Monsters
const zombie = new Zombie({hitpoints: 5, level: 3});
const skeleton = new Skeleton(5, 3);
const banshee = new Banshee(10, 3);
const fred = new Zombie({hitpoints: 1, level: 1, nickname: "Fred"});
const jill = new Banshee(2000, 1000, inventory = ['The God Staff of Omar Illingisisisisisisi', 'The Magic School Bus Season 1 Collectors Edition'], "Hillary, Joe's Mom");

while (zombie.hitpoints > 0 && skeleton.hitpoints > 0) {
  battle(skeleton, zombie);
  console.log(" ");
}

while (fred.hitpoints > 0 && banshee.hitpoints > 0) {
  battle(fred, banshee);
  console.log(" ");
}

while (banshee.hitpoints > 0 && jill.hitpoints > 0) {
 battle(banshee, jill);
 console.log(" ");
}

console.log(" ");
console.log("He has risin! Oh glorious Fred, may he bring glory to the heavens and rain fire on all those who appose him!!!");
console.log(" ");
console.log(" ");

fred.hitpoints = 200000;
fred.level = 9000+1;
fred.inventory.push('The God Staff of Omar Illingisisisisisisi +2');

fred.scream = function() {
  console.log("Ooooga Boooggggaaa!!");
}

fred.onAttack = function() {
  this.scream();
  console.log(`${this.getDisplayName()} attacked for !@#!$%@#~! damage.`);
  jill.hitpoints = -100000;
}

while (fred.hitpoints > 0 && jill.hitpoints > 0) {
  battle(fred, jill);
  console.log(" ");
}

// Some further tests to show how these interact
console.log(`typeof zombie: ${typeof zombie}`);
console.log(`zombie instanceof Zombie: ${zombie instanceof Zombie}`);
console.log(`zombie instanceof Monster: ${zombie instanceof Monster}`);
console.log(`zombie instanceof Skeleton: ${zombie instanceof Skeleton}`);
console.log(`zombie instanceof Banshee: ${zombie instanceof Banshee}`);
console.log(`typeof zombie === typeof skeleton: ${typeof zombie === typeof skeleton}`);
console.log(`typeof zombie === typeof fred: ${typeof zombie === typeof fred}`);
// console.log(`zombie instanceof fred: ${zombie instanceof fred}`); //error because fred isn't a class/constructor.