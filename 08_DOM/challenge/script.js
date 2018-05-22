document.getElementById('mainForm').addEventListener('submit', function(event) {
  event.preventDefault()
  displayItem()
  itemCounter()
})

function toggle(button, item) {
  button.addEventListener('click', function(event) {
    
    if (button.value === "pending") {
      button.value = "complete"
      item.setAttribute("style", "background-color: lightgreen; margin-bottom: 1em;")
    } else {
      button.value = "pending"
      item.setAttribute("style", "background-color: lightgrey; margin-bottom: 1em;")
    }
  progressBar()                  
  itemCounter()
  })
}

const bar = document.getElementById('progress_bar')

function progressBar() {
  const completeCount = []
  let tasks = document.getElementsByClassName('complete')
  let  = document.getElementById('progress_percentage')
  for(let i = 0; i < tasks.length; i++) {
    if (tasks[i].value === "complete") {
      completeCount.push(tasks[i].value)
    }
  }
  if (completeCount.length === 0) {
    bar.style = "visibility: hidden"
  } else {
    bar.style = `width: ${(100 / tasks.length) * completeCount.length}%; background-color: green;`
  }
  bar.innerHTML = `${((100 / tasks.length) * completeCount.length).toFixed(0)}%`
}

function getFormData(form) {

  let inputs = form.getElementsByTagName('input')
  for(let x = 0; x < inputs.length; x++) {
    if(inputs[x].type != 'text') {
      continue;
    }
    return inputs[x].value
  }
}

function displayItem() {

  const form = document.getElementById('mainForm')
  let item = getFormData(form)
  const entry = document.createElement('div')
  const completeBtn = document.createElement('button')
  completeBtn.innerHTML = "Complete"
  completeBtn.className = "complete button is-primary column is-2"
  const cancelBtn = document.createElement('button')
  cancelBtn.innerHTML = "Cancel"
  cancelBtn.className = "cancel button is-danger column is-2 is-offset-10"
  entry.className = "todo_item column"
  entry.style = "background-color: lightgrey; margin-bottom: 1em;"
  entry.textContent = item
  entry.appendChild(completeBtn)
  entry.appendChild(cancelBtn)
  completeBtn.value = "pending"
  const div = document.getElementById('entries')
  div.prepend(entry)
  form[0].value = ""
  toggle(completeBtn, entry)
    
  cancelBtn.addEventListener('click', function (event) {
    // cancelItem(entry)
    entry.remove()
    itemCounter()
  })
}

function itemCounter() {

  let tasks = document.getElementsByClassName('todo_item')
  let counter = document.querySelector('h2')
  let completedTasks = document.getElementsByClassName('complete')
  let completeCount = []        
  for (let i = 0; i < completedTasks.length; i++) {
    if (completedTasks[i].value === "complete")
      completeCount.push(completedTasks[i].value)
  }
  counter.innerHTML = (tasks.length - completeCount.length).toString()   
  progressBar()     
}

function search() {
  const input = document.getElementById('input_bar')
  let filter = input.value.toUpperCase()
  const todo_div = document.getElementById('entries')
  const entries = document.getElementsByClassName('todo_item')
  for (i = 0; i < entries.length; i++) {
      if (entries[i].textContent.toUpperCase().indexOf(filter) > -1) {
        entries[i].style.display = ""
      } else {
        entries[i].style.display = "none"
      }
  }
}

window.onbeforeunload = function() {
  let entries = document.getElementsByClassName('todo_item').innerHTML

  for (let i = 0; i < entries.length; i++) {
    sessionStorage.setItem(`entry${i}`, JSON.stringify(entries[i]))
  }
}

window.onload = function() {
  // let entry_data = sessionStorage.getItem('entries')
  // if (entry_data) {
  //   document.getElementById('entries') = JSON.parse(entry_data)
  // }

  let entry_div = document.getElementById('entries')
  for (let i = 0; i < sessionStorage; i++) {
    let old_data = sessionStorage.getItem(`entry${i}`)
    let new_div = document.createElement('div')
    new_div.innerHTML = old_data
    entry_div.appendChild(new_div)
  }
}