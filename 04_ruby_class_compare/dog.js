const dog = {
  init: function(name) {
    this.name = name;
  },
  speak: function() {
    console.log('Woof my name is ' + this.name);
  }
}

dog.init('Rover');

// ----------------------

// function Dog(name, location) {
//   this.name = name;
//   this.location = location;
// }

// Dog.prototype.speak = function() {
//   console.log(`Woof! My name is ${this.name}`);
//   console.log(`My location is ${this.location}`);
// }

// Dog.prototype.setLocation = function(location) {
//   this.location = location;
// }

class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  speak() {
    console.log(`Woof! My name is ${this.name}`);
    console.log(`My location is ${this.location}`);
  }
  
  setLocation() {
    this.location = location;
  }
}
