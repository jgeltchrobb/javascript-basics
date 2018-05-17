// function fullState(abbreviation) {
//   if (abbreviation === 'NSW') {
//     return 'New South Wales';
//   } else if (abbreviation === 'QLD') {
//     return 'Queensland';
//   } else if (abbreviation === 'WA') {
//     return 'Western Australia';
//   } else if (abbreviation === 'NT') {
//     return 'Northern Territory';
//   } else if (abbreviation === 'SA') {
//     return 'South Australia';
//   } else if (abbreviation === 'TAS') {
//     return 'Tasmania';
//   } else if (abbreviation === 'VIC') {
//     return 'Victoria';
//   }
// }

// const state = fullState(prompt('Enter a state abbreviation'));

// console.log(state);

const states = {
  NSW: 'New South Wales',
  QLD: 'Queensland',
  WA: 'Western Australia',
  NT: 'Northern Territory',
  TAS: 'Tasmania',
  VIC: 'Victoria',
  SA: 'South Australia',
  ACT: 'Australian Capital Territory'
}

// user_input = prompt('Enter a state abbreviation')
console.log(states[prompt('Enter a state abbreviation')])