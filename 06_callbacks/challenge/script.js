getRandomUser = (callback) => {
  // This function uses AJAX to hit the random user API.
  // More info: https://randomuser.me

  var request = new XMLHttpRequest();
  request.open('GET', 'https://randomuser.me/api/', true);
  request.onload = function () {
    /* You'll start here */
    callback(request.status, request.responseText)
    // console.log(request.responseText);
  };

  request.send();
}

// getRandomUser(); // Execute the function

function parseRandomUser(err, data) {
  if(err != 200) {
    console.log('Unknown Error');
    return;
  }
  console.log(JSON.parse(data))
}

function displayData(err, data) {
  x = JSON.parse(data);
  let user_name = document.createElement('li');
  user_name.textContent = `${x.results[0].name.title} ${x.results[0].name.first} ${x.results[0].name.last}`;
  let user_pic = document.createElement('img');
  user_pic.src = x.results[0].picture.thumbnail;
  document.body.appendChild(user_name);
  document.body.appendChild(user_pic);  
}
