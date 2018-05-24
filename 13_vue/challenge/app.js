var app = new Vue({
  el: '#app',
  data: {
    name: 'Jane Doe',
    city: 'Melbourne',
    phone: '+61498 765 432',
    email: 'example@test.com',
    image: '',
    imgCheck: false,
    hobbies: [{
        text: 'Swimming'
      },
      {
        text: 'Running'
      },
      {
        text: 'Skating'
      }
      // hobbies can be stored as a string?
      // or a stringified JSON array?
    ]
  },
  mounted: function(){
    this.getData() // displayData will execute at pageload
  },
  methods: {
     getData: function() {
      fetch('http://localhost:3000/profiles.json').then(function (response) {
        return response.text()
      }).then(function(results) {
        let users = JSON.parse(results)
        console.log(users)
        for (let i = 0; i < users.length; i++) {
          console.log(users[i].name)
          let userDiv = `<h2>${users[i].name}</h2><p>${users[i].city}</p><p>${users[i].phone}</p><p>${users[i].email}</p>`
          console.log($('#user').clone().html(userDiv))
          $('#app').append($('#user').clone().html(userDiv))
        }
        app.name = users[0].name
        app.city = users[0].city
        app.phone = users[0].phone
        app.email = users[0].email
        app.image = users[0].image     
        
      })
    },

    postData: function(data) {
      console.log(data)
      $.post(`http://localhost:3000/profiles.json`, {
        profile: data,

      }, function(response) {
        console.log(response)
      })
    },

    displayData: function(data) {

    },

    addHobby: function () {
      let entry = prompt('Enter hobby')
      this.hobbies.push({
        text: entry
      })
    },

    deleteHobby: function(hobby) {
      this.hobbies.splice(hobby, 1)
    },

    // on open get and display all users, fetch a user, prepend to doc, psot user to server

    fetchRandom: function () {
      fetch('https://randomuser.me/api/').then(function (response) {
        return response.text()
      }).then(function (user) {
        let newUser = JSON.parse(user)
        let uRes = newUser.results[0]
        let userObj = {
          name: `${uRes.name.first} ${uRes.name.last}`,
          city: uRes.location.city,
          phone: uRes.phone,
          email: uRes.email,
          image: uRes.picture.thumbnail,
        }
        console.log(userObj)
        app.name = `${uRes.name.first} ${uRes.name.last}`
        app.city = uRes.location.city
        app.phone = uRes.phone
        app.email = uRes.email
        app.image = uRes.picture.medium
        app.imgCheck = true

        // RUN POST DATA HERE?
        // after pulling down randoms, add them to rails server  
        app.postData(userObj)
        
        

      })
    }
  }
})

// alert(app.name)
