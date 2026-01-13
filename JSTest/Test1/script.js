let i = 10;
let f = 25;
let bool = true;
let s = "Ha Noi"

let width = 20;
let height = 10;
let area = width * height;

console.log('i = ' + i);
console.log('f = ' + f);
console.log('b = '+ bool);
console.log('s = ' + s);
console.log('Area = ' + area);

// put this line in a cmt if run in browser.
const prompt = require('prompt-sync')();

let a = prompt("Enter a: ");
let b = prompt("Enter b: ");
/*
if (isNaN(a) || isNaN (b)){
    alert("Incorrect Number Format");
} else if (b === 0){
    alert("Cannot divide by 0");
} else {
    if (a % b === 0){
        alert("True");
    }
    else {
        alert("False");
    }
}
*/
if (isNaN(a) || isNaN (b)){
    console.log("Incorrect Number Format");
} else if (b === 0){
    console.log("Cannot divide by 0");
} else {
    if (a % b === 0){
        console.log("True");
    }
    else {
        console.log("False");
    }
}
