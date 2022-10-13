let word1 = 'hello';
let word2 = 'world';
console.log("my first string will be "+ word1+' '+word2);


function validFormFieldInput(data) {

}

const newTaskNameInput = document.querySelector('#error');
const name = error.value;
console.log("Name:  ");

const input =
document.getElementById('name');
input.oninvalid=function(event) {
    event.target.setCustomValidity('Name should be letters');
}