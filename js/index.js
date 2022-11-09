function callBack() {
  document.getElementById('name').value = addTask();
  document.getElementById('date').value = addTask();
  document.getElementById('assign-to').value = addTask();
}
submit.addEventListener('click', callBack);

function validFormFieldInput(data) {}

// Name
const nameInput = document.querySelector('#name-input');
const formName = nameInput.value;
console.log('Name: ' + formName);

// Description
const descInput = document.querySelector('#text-area');
const description = descInput.value;
console.log('Description: ' + description);

// Assignment
const assignTo = document.querySelector('#assign-to');
const assignment = assignTo.value;
console.log('Assign To: ' + assignment);

// Date
const dateInput = document.querySelector('#date-input');
const date = dateInput.value;
console.log('Date: ' + date);

function open() {
  document.getElementById('open').innerHTML = '';
}
function close() {
  document.getElementById('close').innerHTML = ' ';
}

// Arrow functions do not work for onclick properties

function formAlert() {
  e.preventDefault();
  if (formName === '') {
    alert('PINGAS');
  } else {
    alert('pingatas');
  }
}

/* function validFormFieldInput(data) {

    const nameInput = document.querySelector('#nameInput');
    const name = nameInput.value;
    console.log("name: "+name);

    };

function validFormFieldInput(data) {

        const newTaskNameInput = document.querySelector('#newTaskNameInput');
        const name = newTaskNameInput.value;
        console.log("name: "+name);
    
};

function validFormFieldInput(data) {

            const newTaskNameInput = document.querySelector('#newTaskNameInput');
            const name = newTaskNameInput.value;
            console.log("name: "+name);
        
};

function validFormFieldInput(data) {

                const newTaskNameInput = document.querySelector('#newTaskNameInput');
                const name = newTaskNameInput.value;
                console.log("name: "+name);
};

       


clearPhotoButton = document.getElementById('subbutton');
  switch (turnon) {
    case 'name':
      console.log('Please enter your name');
      break;
    case 'text-area':
      console.log('Please enter a description of your task.');
      break;
    case 'assigned-to':
      console.log('Please assign your task');
      break;
    case 'date':
      console.log('Dont forget the due date!');
      break;
    default:
      console.log(Please );
      break;
}



if (name === '') {
  console.log('Please enter name.');
} else if (text-area === '') {
  console.log('Please enter description');
} else if (assign-to === '') {
  console.log('Please asign task');
} else if (date === '') {
  console.log('Dont forget the date!');
};

                    

document.getElementById('subbutton).innerHTML = 'Please enter all fields.'
} () => {
document.getElementById('subbutton').innerHTML = "";
}


    
    id="name"
    id="text-area"
    
    id="assign-to" 
    id="date"
    

    class="form-group
    class="form-control */
