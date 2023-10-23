const taskInput = document.getElementById("taskInput");
const buttonAdd = document.getElementById("buttonAdd");
const ul = document.getElementById("taskList");
const createTask = () => {
  if (taskInput.value != "") {
    const task = document.createElement("li");
    task.textContent = taskInput.value;
    ul.append(task);
    taskInput.value = "";
  }
};
buttonAdd.addEventListener("click", createTask);
const checkTask = (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("done");
  }
};
ul.addEventListener("click", checkTask);
