// CALLBACK FUNCTIONS
// will execute once another functon has finished

function addOne(number, callback) {
  console.log('Started addOne...')
  result = number + 1;
  setTimeout(function() {
    console.log('Invoking addOne...')
    callback(result)
    console.log('Finished addOne...')
  }, 2000)
}
// can be done like this

// addOne(5, value => console.log(`addOne completed with result: ${value}`))


// Doing it this way lets you use different functions in showResult's spot

function showResult(value) {
  console.log(`addOne completed with result: ${value}`)
}

console.log('Started main...')
addOne(5, showResult)
console.log('Finished main...')
