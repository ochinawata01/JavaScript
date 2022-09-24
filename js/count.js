

//document.getElementById("count").innerText = 5;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el") ;
let count = 0;

console.log(saveEl)

function increment(){
    count += 1
    countEl.innerText = count;
   // document.getElementById("count-el").innerText = count;
      
} 

function save(){
    let countStr = count +  " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

/*-------work------------- 
let name = "Godwin";
let greeting = "Hi, my name is "

let mygreeting = greeting +  name

console.log(mygreeting) */
 
/*      Welcome Back         
let welcomeEl = document.getElementById("welcome-el");

let names = "Ochi";
let greetings = "Welcome Back "; 
welcomeEl.innerHTML = greetings + names */



