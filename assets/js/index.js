// Connection successful
console.log('CONNECTION SUCCESSFUL');
const taskManager = new TaskManager(0);

// Selecting form inputs

const name = document.querySelector('#taskName');
const description = document.querySelector('#description');
const assignedTo = document.querySelector('#assignTo');
const date = document.querySelector('#date');

const form = document.querySelector('#form');
const submit = document.querySelector('#submit-btn');

form.addEventListener('submit', (e) => {
  // prevents reloading of page on refresh
  e.preventDefault();

  // Verifying to see if we are getting data back to validate

  const taskName = document.querySelector('#taskName');
  const name = taskName;
  console.log(`Name: ${name.value}`);

  const taskDescription = document.querySelector('#description');
  const description = taskDescription;
  console.log(`Description: ${description.value}`);

  const taskAssignedTo = document.querySelector('#assignTo');
  const assignedTo = taskAssignedTo;
  console.log(`Assigned To: ${assignedTo.value}`);

  const taskDate = document.querySelector('#date');
  const date = taskDate;
  console.log(`Due Date: ${date.value}`);

  // Alerts when input fields are empty

  if (name.value === '') {
    alert('Please enter a name');
  } else if (description.value === '') {
    alert('Please enter a description');
  } else if (assignedTo.value === '') {
    alert('Please assign a person');
  } else if (date.value === '') {
    alert('Please select a date');
  } else {
    return;
  }
});

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
