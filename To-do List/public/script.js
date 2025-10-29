const newTaskButton = document.getElementById("new-task-btn");
const deleteIcons = document.getElementsByClassName("delete-icon");
const taskList = document.getElementById("task-list");
const tasksElement = document.querySelectorAll(".task");
const createTaskDialog = document.getElementById("create-task-dialog");
const saveTaskButton = document.getElementById("save-task-button");
const cancelButton = document.getElementById("cancel-btn");

const tasks = [
  { id: "1", description: "Learning Python every week", status: true },
  { id: "2", description: "Buy oranges for mom", status: false },
];

const renderTask = () => {
  tasks.forEach(({ id, description, status }) => {
    taskList.innerHTML += status
      ? `
      <div class="task-container group/task">
        <div id="${id}" class="task bg-(--rose)">
          <i class="fa-regular fa-square task-status"></i>
          <p class="task-description line-through opacity-70">${description}</p>
        </div>
        <i class="fa-solid fa-trash delete-icon peer"></i>
      </div>
    `
      : `
      <div class="task-container group/task">
        <div id="${id}" class="task bg-(--rose)">
          <i class="fa-regular fa-square task-status"></i>
          <p class="task-description">${description}</p>
        </div>
        <i class="fa-solid fa-trash delete-icon peer"></i>
      </div>
    `;
  });
};

const createTask = () => {};

newTaskButton.addEventListener("click", () => {
  createTaskDialog.showModal();
});

cancelButton.addEventListener("click", () => {
  createTaskDialog.close();
});

tasksElement.forEach((element) => {
  element.addEventListener("click", () => {
    const currentTask = tasks.find((task) => task.id === element.id);
    const description = element.querySelector("p");
    const statusIcon = element.querySelector("i");

    if (currentTask.status) {
      description.classList.add("line-through", "opacity-70");
      statusIcon.classList.add("fa-solid", "fa-square-check");
      statusIcon.classList.remove("fa-regular", "fa-square");
    } else {
      description.classList.remove("line-through", "opacity-70");
      statusIcon.classList.remove("fa-solid", "fa-square-check");
      statusIcon.classList.add("fa-regular", "fa-square");
    }
    currentTask.status = !currentTask.status;
  });
});

{
  /* <div class="task-container group/task">
  <div class="task bg-(--rose)">
    <i class="fa-regular fa-square task-status"></i>
    <p class="task-description">Learning Python every week</p>
  </div>
  <i class="fa-solid fa-trash delete-icon peer"></i>
</div> */
}

// <div class="task-container group/task">
//   <div class="task bg-(--flamingo)">
//     <i class="fa-solid fa-square-check task-status"></i>
//     <p class="task-description line-through opacity-70">
//       Buy oranges for mom
//     </p>
//   </div>
//   <i class="fa-solid fa-trash delete-icon peer"></i>
// </div>
