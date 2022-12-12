// creates tasks to be inserted into the ul

const createTaskHtml = (id, name, description, assignedTo, date, status) => {
  const html = `   
    <li class="list-group-item mt-3 mb-1" data-task-id=${id}>
    <div class="card bg-light border-secondary border-opacity-50" style="width: 25rem">
       <div class="card-body">
         <div class="row">
         <h5 class="col-sm-8 card-title">${name}</h5>
        <div class="col-md-4">
                <label for="taskStatus">Status</label>
                <select id="taskStatus" class="form-control" required>
                  <option value="">${status}</option>
                  <option class='bg-warning' value="To Do">To Do</option>
                  <option class="btn-warning" value="In Progress">
                    In Progress
                  </option>
                  <option class="btn-danger" value="Review">Review</option>
                  <option class="bg-success" value="Done">Done</option>
                </select>
                <div class="invalid-feedback">Please select a status</div>
              </div>
         </div>
         <p class="card-text fw-bold">${assignedTo}</p>
         <p class="card-text fw-bold">${date}</p>
         <h6 class="card-subtitle mb-2 text-muted">Description</h6>
         <p class="card-text">${description}</p>
         </div>
         <br>
         <div class="d-flex justify-content-end mb-3 mx-1">
         <a href="#" class="done-button card-link btn btn-success">Complete</a>
         <a href="#" class="delete-button card-link btn btn-danger">Delete</a>
         </div>
       </div>
     </div>
</li> 
`;

  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push(task);
  }
  render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let currentTask = this.tasks[i];
      const currentDate = new Date(currentTask.dueDate);
      let formattedDate = currentDate.toDateString();
      let taskHtml = createTaskHtml(
        this.tasks[i].id,
        this.tasks[i].name,
        this.tasks[i].description,
        this.tasks[i].assignedTo,
        formattedDate,
        this.tasks[i].status
      );
      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join('\n');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    let foundTask = taskId;
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }

  // save method
  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);

    // const currentId = JSON.stringify(this.currentId);
    const currentId = this.currentId.toString();
    localStorage.setItem('currentId', currentId);
  }

  // load method
  load() {
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');
      this.currentId = parseInt(currentId);
    }
  }

  // deletes tasks using their ID
  deleteTask(taskId) {
    let newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.id != taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }
}
