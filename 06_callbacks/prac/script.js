setTimeout(function() {
  console.log('Timeout - 1 second!')
  setTimeout(function() {
    console.log('Another 2 seconds')
    setTimeout(function() {
      console.log('Another 3 seconds..!')
    }, 3000)
  }, 2000)
}, 1000)

console.log('Started app...')