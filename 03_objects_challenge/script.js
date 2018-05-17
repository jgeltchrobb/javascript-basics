const me = {}

me.age = 27;
me.currentLocation = 'Brisbane';
me.hobbies = ['Basketball', 'Games', 'Surfing']

// console.log(me.age, me.currentLocation, me.hobbies)

delete me.age

// function print_details(object) {
//   console.log(object.age);
//   console.log(object.currentLocation);
//   console.log(object.hobbies);
// }

for (let i = 0; i < me.hobbies.length; i++ ) {
  console.log(me.hobbies[i])
}

me.hobbies.forEach((hobbie) => {
  console.log(hobbie);
})


me.hobbies.push('Running')

me.hobbies.shift()

me.hobbies.map(hobbie => console.log(hobbie))

me.mother = {}

me.mother.name = "Jane";
me.mother.age = 54;
me.mother.location = "Redcliffe";

// print_details(me);

me.print_details = function() {
  console.log(this.mother, this.currentLocation, this.hobbies);
}

me.print_details()

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

delete brisbane_campus.state

console.log(`Street: ${coder_academy.brisbane.street}, State: ${coder_academy.brisbane.state}`)
