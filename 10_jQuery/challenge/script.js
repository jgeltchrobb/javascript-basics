let storage = []
$(document).ready(retrieveData)
$(document).keydown(function(event){
  if(event.which=="17")
      cntrlIsPressed = true;
});

$(document).keyup(function(){
  cntrlIsPressed = false;
});

var cntrlIsPressed = false;

// change todo_item class to completebtn
// chance complete button value to complete
// push to storage and locally store it

$('#completeAll').click(function(event) {
  for (let i = 0; i < $('.todo_item').length; i++) {
    if ($('.todo_item')[i].className !== 'todo_item column completeBtn') {
      $('.todo_item')[i].className = 'todo_item column completeBtn'
      console.log($('.todo_item')[i].childNodes[1].value)
      $('.todo_item')[i].childNodes[1].value = 'complete'
      console.log($('.todo_item')[i].childNodes[1].value)   
      
    }
    changeData($('.todo_item'), 'complete')
    console.log(storage)
    
  }
  // console.log($('.todo_item').text())
})


$('#mainForm').on('submit', function(event) {
  event.preventDefault()
  displayItem(getFormData(event.target), "pending")
})

function getFormData(form) {

  let inputs = $('input')
  for(let x = 0; x < inputs.length; x++) {
    if(inputs[x].type != 'text') {
      continue;
    }
    return inputs[x].value
  }
}

function displayItem(item, check) {
  let cInsert = ""
  if (check === 'complete') {
    cInsert = "completeBtn"
  }

  let todo = `<div class="todo_item column ${cInsert}" style="margin-bottom: 1em;">${item}</div>`
  let completeBtn = `<button class="complete button is-primary column is-2" value=${check}>Complete</button>`
  let cancelBtn = '<button class="cancel button is-danger column is-2 is-offset-10">Cancel</button>'
  $('#entries').prepend(todo)
  let entry = $('.todo_item:first-child').append(completeBtn).append(cancelBtn)

  $('.complete').off('click').on('click', function(event) {
    if (this.value === 'pending') {
      $(this).parent().toggleClass('completeBtn');
      this.value = 'complete'
    } else {
      $(this).parent().toggleClass('completeBtn');
      this.value = 'pending'      
    }
    itemCounter()
    changeData($(this).parent(), this.value)
  })

  $('.cancel').off('click').on('click', function() {
    $(this).parent().remove()
    itemCounter()
    removeData($(this).parent().clone().children().remove().end().text())
  })
  

  $('.todo_item').click(function(event) {
    console.log('yo')
      if(cntrlIsPressed) {
        console.log('worked')
        event.target.remove()
      }
  })

  $('form input:first-child').val("")
  
  itemCounter()
  storeData(entry)
}

function itemCounter() {
  let completeCount = [] 
  if ($('.todo_item').length === 0) {
    $('h2').html('0')
  }
  for (let i = 0; i < $('.complete').length; i++) {
    if ($('.complete')[i].value === "complete") {
      completeCount.push($('.complete')[i].value)
    }
    $('h2').html(($('.todo_item').length - completeCount.length).toString())
  }

  // progressBar()     
}

function search() {
  let filter = $('#input_bar').val().toUpperCase()
  // let filter = input.value.toUpperCase()
  const todo_div = document.getElementById('entries')
  const entries = $('.todo_item')
  for (i = 0; i < entries.length; i++) {
      if (entries[i].textContent.toUpperCase().indexOf($('#input_bar').val().toUpperCase()) > -1) {
        entries[i].style.display = ""
      } else {
        entries[i].style.display = "none"
      }
  }
}

function removeData(item) {
  console.log(item)
  for (let i = 0; i < storage.length; i++) {
    if (item === storage[i].task) {
      console.log(storage)
      storage.splice(i, 1)
      console.log(storage)
      
      localStorage.setItem('items', JSON.stringify(storage))
      return
    }
  }
}

function changeData(parentDiv, status) {

  for (let i = 0; i < parentDiv.length; i++) {
    console.log('abc')
    console.log($(parentDiv[i]).clone().children().remove().end().text())
    console.log(status)
    
    // try a loop here for parentdiv?
    console.log(storage)
    for (let i in storage) {
      if (storage[i].task === $(parentDiv[i]).clone().children().remove().end().text()) {
        console.log('yeeeeeeeeeep')
        console.log(storage[i].status)
        
        storage[i].status = status
        console.log(storage[i].status)
      }
    }
    console.log(storage)
  }
  localStorage.setItem('items', JSON.stringify(storage))
}

// if true check if var item's buttons value is not in each array items hash (status)
//   if true check if var item's text content === task
        // if htose are both true swap the storage[i].status to buttons value

function storeData(item) {
  let content = item.clone().children().remove().end().text()
  let status = item.children()[0].value

  storage.push({task: content, status: status})
  localStorage.setItem('items', JSON.stringify(storage))
  }

function retrieveData() {
  let items = localStorage.getItem('items')
  let item_arr = JSON.parse(items)
  for (let i = 0; i < item_arr.length; i++) {
    displayItem(item_arr[i].task, item_arr[i].status)
  }
}
