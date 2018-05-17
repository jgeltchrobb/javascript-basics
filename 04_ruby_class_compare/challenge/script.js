class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
    this.timestamp = new Date()
  }

  toString() {
    return `Walked for ${this.distance} to ${this.location}`
  }
}

class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.walks = [];
    // this.distance_sum  = [];
  }

  speak() {
    console.log(`Woof! My name is ${this.name}`);
  }

  walk(location, distance) {
    this.walks.push(new Walk(location, distance));
    // this.distance_sum.push(x.distance);
  }

  display_walks() {
    // ES6
    for (const walk of this.walks) {

      // time = walk.timestamp.tolocaleTimeString()
      // date = walk.timestamp.tolocaleDateString()
      
      return(`${this.name}'s walked ${walk.distance} kms to ${walk.location} at ${walk.timestamp}`);
    }

    // Using toString method in walk class
    // this.walks.forEach(walk => console.log('' + walk))
    
    // Alternatively (ES5)

    // this.walks.forEach( function(walk) {
    //   return(`${this.name}'s walked ${walk.distance} kms to ${walk.location} at ${walk.timestamp}`);
    // })

    // OR (ES6)

    // this.walks.forEach(walk =>
    //   return(`${this.name}'s walked ${walk.distance} kms to ${walk.location} at ${walk.timestamp}`);
    // )
  }

  total_distance() {
    // console.log(this.walk.distance.reduce(function(a, b) {
    //   return a + b
    // }, 0))
    let total = 0;
    this.walks.forEach( walk => {
        total += walk.distance
      }
    )
    console.log(total)
  }

}


// d = new Dog('Steve', 'Brisbane')
// d.walk.location
// d.walk('Redcliffe', 9)
// d.walk('Margate', 3)

// array1.forEach(function(element) {
//   console.log(element);
// });


document.getElementById("new_dog").addEventListener("click", function(){
  x = new Dog(prompt('Enter name'), prompt('Enter location'));
  console.log(x)

  let dog_name = document.createElement('h4');
  dog_name.textContent = x.name;
  dog_name.setAttribute('class', 'dog_name');
  document.body.appendChild(dog_name);

  let dog_loc = document.createElement('li');
  dog_loc.textContent = `Location: ${x.location}`;  
  dog_loc.setAttribute('class', 'dog_item');
  document.body.appendChild(dog_loc);

  let walk_button = document.createElement('BUTTON');
  walk_button.textContent = 'Walk Dog';
  // walk_button.setAttribute('id', 'walk_button');  
  document.body.appendChild(walk_button);
  walk_button.addEventListener("click", function() {
    x.walk(prompt('Enter walk location'), prompt('Enter walk distance'));

    let walk_loc = document.createElement('h5');
    walk_loc.textContent = x.display_walks();
    walk_loc.setAttribute('class', 'walk_item');
    document.body.appendChild(walk_loc);
  })
});


