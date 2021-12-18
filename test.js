
// variables
const name = "asif"; 
let age = 30;
var gender = "M";
age = 27;
age = 30
age = 35
gender = "F"
// console.log(`name : ${name}, age : ${age}, gender : ${gender}`)

// reserved keywords

const calc = function(num1, num2, operation){
    if(operation == '+'){
        console.log(`num1 + num2 = ${num1 + num2}`)
    }else if(operation == "-"){
        console.log(`num1 - num2 = ${num1 - num2}`)
    }else if (operation == "*"){
        console.log(`num1 * num2 = ${num1 * num2}`)
    }else if(operation == '/'){
        console.log(`num1 / num2 = ${num1 / num2}`)
    }else {
        console.log(`invalid operation`)
    }
}

calc(56, 4, "=");