function createTodo() {
  const listItem = document.createElement("li");
  const todosContainerElement = document.getElementById("todos-container");
  const userInput = document.getElementById("note").value;
  todosContainerElement.appendChild(listItem);
  listItem.innerHTML = userInput;
  listItem.setAttribute("onclick", "todoCheck(event, this)");
  document.getElementById("note").value = "";
}

function deleteTodos() {
  document.getElementById("todos-container").innerHTML = "";
}

function todoCheck(e, todo) {
  if (todo.style.textDecoration == "") {
    return (todo.style.textDecoration = "line-through");
  } else {
    return (todo.style.textDecoration = "");
  }
}
