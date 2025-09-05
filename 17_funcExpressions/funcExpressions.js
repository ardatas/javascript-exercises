// function greet() {
//     console.log('Hello!');
//     // return ('Return value');
//     // if else [undefined]
// }

// console.log( greet ); // Prints out [Function: greet]
// console.log(greet()); // Prints out Hello but still returns undefined 
//                     // to return Hello, return ('Hello'); 

// // to return a function only --> 
// greet(); 

// //Reassing a function to another variable using let
// let funcGreet = greet;
// funcGreet(); // prints out hello! 

// // ?? Does this work with var too? Answer: Yes 
// var funcGreetVar = greet; // writes the function itself
// funcGreetVar();

// console.log('//////////////');

// let variable = greet();
// console.log(variable); 

// console.log('FUNC EXPR //////////////');

// // Function expressions
// let sayHi = function() {
//     return ('Say Hi!');
// }

// console.info(sayHi());


//let askAge = prompt('What is your age?', 0);

// if (askAge < 18) {
//     function checkAge() {
//         alert("Your are not allowed.");
//     }
// } else if (askAge >= 18) {
//     function checkAge() {
//         alert("Welcome!");
//     }
// }

// does not work due to block scope attribute of func declarations

// Use function expression to make it variable scoped 

/*
var checkAge;

for (let i=0; i<2; i++) {

    // console.log(checkAge); 
    // gets Reference Error with let checkAge, code does not run 

    // console.log(checkAge);
    // Undefined, code still runs because it is initialized to undefined, no error

    let askAge = prompt('What is your age?', 0);
    
    if (askAge < 18) {
        checkAge = function() {
            alert('You are not allowed here.')
        };
    } else if (askAge >= 18) {
        // ONLY DECLARES & creates a FUNCTION, not calls it 
        checkAge = function() {
            alert('You are allowed here.')
        };
    }
    // NEVER FORGET TO CALL THE FUNCTION
    checkAge();
}
    */

// arrow functions
 
let sum = (a, b) => (a+b);
console.log(sum(5,4));

let leave = () => ('Bye!');
console.log(leave());

// Ternary ? : operator with arraw functions 

let askAge = prompt('Type in your age: '); 
let greet; // Realized that program also works withouth declaring arrow function. Explain how?

if (askAge  < 0) { 
    askAge = prompt('Unavailable age. Type a positiv integer: ');
} 

let checkAge = (askAge < 18) ? // askAge would not be visible here without declaring atop, because it is block scoped 
    greet = () => alert('Not allowed') :
    greet = () => alert('Allowed')

