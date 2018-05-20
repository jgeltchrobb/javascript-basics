// doThing returns a promise object (result) to 'then'
// a promise is either pending, fulfilled or rejected

// doThing().then(function(result) {
//   return doNextThing()
// }).then(function(nextThingResult) {
//   return doSomeOtherThing()
// }).then(function(someOtherThingResult) {
//   console.log(someOtherThingResult)
// })

// .then is the promise which passes its value into (result) once the promise is fulfilled(no longer pending or rejected)
// .catch is for when the promise is rejected and then handles the error
navigator.getBattery().then(function(result) {
  console.log(result)
}).catch(function(error) {
  console.log('An error occurred: ' + error)
})

// es6 has fetch instead of xmlhttprequest | it returns a promise

fetch('https://randomuser.me/api/').then(function(response) {
  console.log(response)
}).catch(function(error) {
  console.log(`Something went wrong: ${error}`)
})

// create our own promise
function readJSON(json) {
  // resolve is essentially .then value
  return new Promise(function(resolve, reject) {
    try {
      const data = JSON.parse(json)
      resolve(data)
    }
    catch (error) {
      // invalid JSON
      reject({ error: true, message: error.message })
    }
  })
}

const x = '{ "name":"John", "age":"25" }'

readJSON(x).then(function(result) {
  console.log(result)
}).catch(function(err) {
  console.log(`Promise rejected: ` + err.message)
})