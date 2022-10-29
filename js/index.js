function callBack() {
document.getElementById("name").value=addTask()
document.getElementById("date").value=addTask()
document.getElementById("assign-to").value=addTask()
}
submit.addEventListener('click',callBack)
