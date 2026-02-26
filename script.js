const todos = [];

const input = document.getElementById("taskInput");
const btn = document.getElementById("addTaskBtn");
const list = document.getElementById("todo-list");

btn.addEventListener("click", function () {
  if (input.value.trim() === "") return;

  const todo = {
    id: Date.now(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  todos.push(todo);

  renderTodos();
  input.value = "";
});

function renderTodos() {
  list.innerHTML = "";
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.textContent = `${todo.title} (${todo.createdAt.toLocaleString()})`;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", function () {
      todo.completed = !todo.completed;
      renderTodos();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();

      const index = todos.findIndex((t) => t.id === todo.id);
      todos.splice(index, 1);
      renderTodos();
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
