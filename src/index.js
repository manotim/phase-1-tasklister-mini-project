document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.target.new_todo.value)
    form.reset()
  })
});

function buildList(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#todo_container').appendChild(p)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}


