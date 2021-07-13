//Mass with all data
let todo = [
  { id: "1", text: "Молоко", completed: false },
  { id: "2", text: "Сыр", completed: false },
];

//Updates ID in the todo mass and updates the page
function updatepage() {
  document.getElementById("todos").remove();
  let ul = document.createElement("ul");
  ul.id = "todos";

  todo.forEach((todo, id) => {
    todo.id = id + 1;
    let li = document.createElement("li");
    let input = document.createElement("input");
    let b = document.createElement("b");
    let span = document.createElement("span");
    let button = document.createElement("button");

    input.type = "checkbox";
    input.name = "compled";
    input.id = "checkbox_" + todo.id;
    input.addEventListener("change", () => lineThrough(id));

    b.innerText = todo.id;

    span.innerHTML = "&nbsp;";
    span.prepend(b);
    span.append(todo.text);
    if (todo.completed) {
      span.className = "completed";
      input.checked = true;
    }

    button.className = "close_button";
    button.id = "close_button_" + todo.id;
    button.addEventListener("click", () => deldoto(id));
    button.innerText = "x";

    li.append(input);
    li.append(span);
    li.append(button);
    ul.append(li);
  });

  document.body.append(ul);
}

//Add new element in todo
document.getElementById("input-todo-button").onpointerup = () => {
  if (!!document.getElementById("input-todo").value) {
    todo.push({
      id: todo.length + 1,
      text: document.getElementById("input-todo").value,
      completed: false,
    });
    updatepage();
  }
};

//Stresses executed todo
function lineThrough(id) {
  todo[id].completed = !todo[id].completed;
  updatepage();
}

//Removes todo
function deldoto(id) {
  todo.splice(id, 1);
  updatepage();
}

updatepage();
