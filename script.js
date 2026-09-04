console.log("hello world.");
console.log("from script.js file.");

const myName = "Jom";
let age = 60;
age = 18;
const number = 91535667371;
const address = "E B Magalona";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names = []){
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return`${greetings} sa enyu ${names}`;
} 
console.log(greet("Maayong aga", ["Jom, bai, soy, tol, erp"]));

const heading = document.querySelector("h1")
heading.textContent = "Your father's name";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function(){
    heading.style.color = "red";
    console.log("heading was clicked")
});

const contactsHeading = document.querySelector("#contacts h2");
console.log(contactsHeading);

const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

const toggleButton = document.querySelector(`switch`);
const body = document.querySelector(`body`);
let isOff = false;

toggleButton.addEventListener ("click", function() {
    isOff = !isOff;

    if (isOff){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
})