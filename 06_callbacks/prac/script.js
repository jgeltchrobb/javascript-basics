getRandomUser = (callback) => {
  // This function uses AJAX to hit the random user API.
  // More info: https://randomuser.me

  var request = new XMLHttpRequest();
  request.open('GET', 'https://randomuser.me/api/', true);
  request.onload = function () {
    /* You'll start here */
    callback(request.status, request.response);
  };

  request.send();
}

function parseRandomUser(obj) {
  return JSON.parse(obj);
}

function displayData(err, data) {
  if (err != 200 ) {
    console.log('An error has occurred.');
    return;
  }
  const info = parseRandomUser(data);
  document.write(`${info.results[0].name.first} ${info.results[0].name.last}`);
}


getRandomUser(displayData); // Execute the function
