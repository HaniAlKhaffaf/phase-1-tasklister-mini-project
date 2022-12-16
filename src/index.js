document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    createToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function createToDo(todo) {
  let li = document.createElement("li")
  let btn = document.createElement("button");
  btn.addEventListener("click", removeToDo);
  btn.textContent = "X";
  li.textContent = `${todo} `;
  li.appendChild(btn)
  document.getElementById("tasks").appendChild(li);
}

function removeToDo (e) {
  e.target.parentNode.remove();
}