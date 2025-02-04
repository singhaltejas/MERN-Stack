let taskList = [];
let next_id = taskList.length;

function addToHtml() {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "task-checkbox";

  checkbox.id = `task-${next_id}`; // Unique checkbox ID
  next_id++;

  label.textContent = taskList[taskList.length - 1][0]; // Task description
  checkbox.className = taskList[taskList.length - 1][1]; // Task status as a class

  label.prepend(checkbox);

  const container = document.getElementById("task-list");
  container.appendChild(label);
}

document
  .getElementById("newTaskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let newTask = document.getElementById("newTask").value;
    if (newTask.length === 0) alert("Enter Something");
    else {
      taskList.push([newTask, false]); // task text, completed?
      addToHtml();
    }
  });
