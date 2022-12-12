// declare variables
const taskManager = new TaskManager();
taskManager.load();
taskManager.render();

const name = document.querySelector('#taskName');
const assignedTo = document.querySelector('#assignTo');
const date = document.querySelector('#date');
const status = document.querySelector('#taskStatus');
const description = document.querySelector('#description');
const taskHtml = createTaskHtml(name, description, assignedTo, date, status);
const newForm = document.getElementById('form');
const submit = document.getElementById('submit-btn');

// submit event listener for form validation and to add task
newForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = document.querySelector('#taskName');
  const taskAssignTo = document.querySelector('#assignTo');
  const dueDate = document.querySelector('#date');
  const taskStatus = document.querySelector('#taskStatus');
  const taskDescription = document.querySelector('#description');

  // *** form alerts ***/
  if (taskName.value === '') {
    alert('Please choose task name');
  } else if (taskDescription.value === '') {
    alert('Please enter a task description');
  } else if (taskAssignTo.value === '') {
    alert('Please assign the task to a person');
  } else if (dueDate.value === '') {
    alert('Please choose a date');
  } else if (taskStatus.value === '') {
    alert('Please choose a status');
  } else {
    // *** add values *** //
    const name = taskName.value;
    const description = taskDescription.value;
    const assignedTo = taskAssignTo.value;
    const date = dueDate.value;
    const status = taskStatus.value;

    taskManager.addTask(name, description, assignedTo, date, status);

    taskName.value = '';
    taskDescription.value = '';
    taskAssignTo.value = '';
    taskStatus.value = '';
    dueDate.value = '';
    taskManager.render();
  }
});

console.log(taskManager);

const taskList = document.querySelector('#taskList');
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button') === true) {
    const parentTask = event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = taskManager.getTaskById(taskId);
    task.status = 'DONE';
    taskManager.save();
    taskManager.render();
  }
  if (event.target.classList.contains('delete-button') === true) {
    const parentTask = event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }
});
