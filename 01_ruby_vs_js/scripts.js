// const user = 'tom'
// let age = prompt('Enter your age')


// if (user === 'tom') {
//   console.log(`Hello ${user}`);
// } else {
//   console.log('Hello someone other than Tom');
// }

// if (age >= 18) {
//   console.log(`Welcome to the casino, ${user}`);
// } else {
//   alert("DENIED");
// }

const students = [];
// students.push('Sarah');

// let name = prompt('Enter your name');

// students.push(name);

for (let i = 0; i < 3; i++) {
  let info = {}
  info.name = prompt('Enter your name');
  info.age = prompt('Enter your age');  
  students.push(info);
}



console.log(students)

// for (let i = 0; i < students.length; i++) {
//   alert(students[i])
// }

for (let student of students) {
  alert(student);
}

