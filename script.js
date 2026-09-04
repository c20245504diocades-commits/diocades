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

console.log(greet("maayong aga", ["Jom, bai, soy, tol, erp"]));