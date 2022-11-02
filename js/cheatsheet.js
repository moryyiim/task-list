const generateEl = document.getElementById('generate');
const statementEl = document.getElementById('statement')
//FUNCTION and assign label input to a variable using its id
//the id is in the input in html
 function randomNames() {
    let x = document.querySelector("#division").value;
    let y= x + ' is my fav color tooooo'
    return y
}

//FUNCTION FOR ASSIGNING THAT FUNCTION TO the output paragraph.
// CHOOSE NEW VARIABLE
//"name" is the id for the output paragraph

function setRandom (){
    document.getElementById('name').innerText = randomNames();
 };

 //THIS CALLS THE FUNCTION
 //generate is the id of the button
generate.addEventListener('click', setRandom);

// read more


// Write your code here:


//FUNCTION FOR ASSIGNING THAT FUNCTION TO the output paragraph.
// CHOOSE NEW VARIABLE
//"name" is the id for the output paragraph

const setRandom2 =() => {
    document.getElementById('mi').innerText = showInfo();
 };

 //THIS CALLS THE FUNCTION
 //generate is the id of the button
read2.addEventListener('click', setRandom2);



//THIS FUNCTION REVEALS OR HIDES "REVEAL THIS"


function rvl() {
 statementEl.style.display = 'block';

}


function hde() {
   statementEl.style.display = 'none';
  }

function random3() {
    hde();
}

function random4() {
    rvl();
}

function handleGenerateClick() {
    console.log('clicking the generate button',generateEl)
    // do some logic
}

generateEl.addEventListener('click',handleGenerateClick)
hideButton.addEventListener('click', random3)
revealButton.addEventListener('click', random4)


// INDIRECT BILLI CALCULATOR

//WRITE FUNCTION AND ASSIGN INPUT ID TO VARIABLE 
function indBili() {
    const totEl = document.getElementById('tot').value;
    const dirEl = document.getElementById('dir').value;
    
    return totEl-dirEl;

}
console.log(indBili())

//CREATE RANDOM FUNC TO ASSIGN MAIN FUNC TO OUTPUT <P>
//USE ARROW FUNC


function random5() {

    document.getElementById("output").innerText=indBili()
}

//ASSIGN RANDOM FUNC TO BUTTON ID 
calcIndr.addEventListener('click',random5)

// INDIRECT BILLI CALCULATOR

    function getSelectValue() {
    let diagnosis=document.getElementById('list1').value;
    let hepB=document.getElementById('hepB');

if (diagnosis==`${hepB}`){
    return 'eligible';
}   else{
    return 'ineligible'
}   
    function random8(){

        document.getElementById("output7").innerText=getSelectValue()

}
document.getElementById("list1").addEventListener('change',getSelectValue);
submit.addEventListener('click',random8)   

}

//CREATING SPECIFIC MESSAGES FOR DROP DOWN OPTIONS
function valu(){

var e = document.getElementById("ddlViewBy");
var value = e.value;
var text = e.options[e.selectedIndex].text;

if(value=="2"){
    return 'eligible';
} else {
    return 'not'
}
}

function random8() {

    document.getElementById("output8").innerText=valu()
}

submit8.addEventListener('click',random8)

//CREATING SPECIFIC MESSAGES FOR DROP DOWN OPTIONS


//creating a class

class player { //new class
constructor(name, height, weight){  //constructor has peramiters 
    console.log("created player called "+ name+ " and he is " +height+"cm tall and "+ weight+" lbs")
}
}
let player1=new player('lebron', 340, 220); //instance
let player2=new player('jordan', 240, 190); //instance
let player3=new player('kobe', 200, 175); //instance 


//creating a class


//promise

fetch ('https://api.github.com/users') // this tasks takes time so we need the function to wait
.then((res)=>{  //res is the standard variable for response
    console.log("the cat is out of the bag"); //if the task above works, then it will log this
})
.catch((err)=>{ //err is standard variable for error
    console.log("cat error");//if the task fails it will log this message
})

//promise can also be written with AWAIT

async function fetchData(){
    const data = await fetch ('https://api.github.com/users'); //with "await" works
    console.log(data);
}
fetchData()
//promise