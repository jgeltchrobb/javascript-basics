document.getElementById('mainForm').addEventListener('submit', function(event) {
  event.preventDefault()
  displayItem()
  itemCounter()
})

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
  const entry = document.createElement('p')
  entry.textContent = item
  const div = document.getElementById('entries')
  div.appendChild(entry)
  form[0].value = ""
}

function itemCounter(n) {

  let counter = document.querySelector('h2')
  const num = Number(counter.innerHTML)
  counter.innerHTML = (num + 1).toString()
  console.log(typeof counter)
}
