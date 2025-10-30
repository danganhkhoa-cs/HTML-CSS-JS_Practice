const newTaskButton = document.getElementById("new-task-btn");
const deleteIcons = document.getElementsByClassName("delete-icon");
const taskList = document.getElementById("task-list");
const createTaskDialog = document.getElementById("create-task-dialog");
const saveTaskButton = document.getElementById("save-task-btn");
const cancelButton = document.getElementById("cancel-btn");
const taskDescriptionInput = document.getElementById("task-description-input");
const colorInputList = document.querySelectorAll("#color-input input");

let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

const addNewTask = (id, description, color) => {
  const task = {
    id: id,
    description: description,
    status: true,
    color: color,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskList.innerHTML += `
    <div class="task-container group/task">
      <div data-id="${id}" class="task bg-(--${color})">
        <i class="fa-regular fa-square task-status"></i>
        <p class="task-description">${description}</p>
      </div>
      <i data-id="${id}" class="fa-solid fa-trash delete-icon "></i>
    </div>
  `;
};

const renderTasks = () => {
  tasks.forEach(({ id, description, status, color }) => {
    taskList.innerHTML += status
      ? `
      <div class="task-container group/task">
        <div data-id="${id}" class="task bg-(--${color})">
          <i class="fa-regular fa-square task-status"></i>
          <p class="task-description">${description}</p>
        </div>
        <i data-id="${id}" class="fa-solid fa-trash delete-icon "></i>
      </div> `
      : `
      <div class="task-container group/task">
        <div data-id="${id}" class="task bg-(--${color})">
          <i class="fa-solid fa-square-check task-status"></i>
          <p class="task-description line-through opacity-70">${description}</p>
        </div>
        <i data-id="${id}" class="fa-solid fa-trash delete-icon "></i>
      </div>
    `;
  });
};
renderTasks();

newTaskButton.addEventListener("click", () => {
  createTaskDialog.showModal();
});

saveTaskButton.addEventListener("click", () => {
  const description = taskDescriptionInput.value;
  const color = Array.from(colorInputList).find(
    (input) => input.checked == true
  ).value;
  const id = Date.now().toString();

  addNewTask(id, description, color);

  taskDescriptionInput.value = "";
  createTaskDialog.close();
});

cancelButton.addEventListener("click", () => {
  createTaskDialog.close();
});

taskList.addEventListener("click", (event) => {
  const taskElement = event.target.closest(".task");
  const deleteIcon = event.target.closest(".delete-icon");

  if (taskElement) {
    const currentTaskObject = tasks.find(
      (task) => task.id === taskElement.dataset.id
    );
    const descriptionElement = taskElement.querySelector("p");
    const statusIcon = taskElement.querySelector("i");

    if (currentTaskObject.status) {
      descriptionElement.classList.add("line-through", "opacity-70");
      statusIcon.classList.add("fa-solid", "fa-square-check");
      statusIcon.classList.remove("fa-regular", "fa-square");
    } else {
      descriptionElement.classList.remove("line-through", "opacity-70");
      statusIcon.classList.remove("fa-solid", "fa-square-check");
      statusIcon.classList.add("fa-regular", "fa-square");
    }
    currentTaskObject.status = !currentTaskObject.status;
  }

  if (deleteIcon) {
    tasks = tasks.filter((task) => task.id !== deleteIcon.dataset.id);
    toRemoveTaskContainer = deleteIcon.closest(".task-container");
    toRemoveTaskContainer.remove();
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
});
