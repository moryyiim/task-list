// Connection successful
console.log('CONNECTION SUCCESSFUL');

// Selecting form inputs

const name = document.querySelector('#taskName');
const description = document.querySelector('#description');
const assignedTo = document.querySelector('#assignTo');
const date = document.querySelector('#date');

const form = document.querySelector('#form');
const submit = document.querySelector('#submit-btn');

// Verifying to see if we are getting data back

const taskName = name.value;
console.log(`name: ${taskName}`);

const taskDescription = description.value;
console.log(`description: ${taskDescription}`);

const taskAssignedTo = assignedTo.value;
console.log(`assigned to: ${taskAssignedTo}`);

const taskDate = date.value;
console.log(`date: ${taskDate}`);
