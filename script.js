const input = document.getElementById("taskInput");
const btn = document.getElementById("addTaskBtn");
const display = document.getElementById("display");

btn.addEventListener("click", () => {
  display.textContent = input.value;
  input.value = "";
});
