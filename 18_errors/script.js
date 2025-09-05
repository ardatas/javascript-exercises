const a = 44;
// console.log(b); // b is notdefined  ReferenceError


let double = (number) => {
    const b = 6;
    return b*2; 
};

// console.log(double(b)); // ReferenceError b is not defined (function scope)

let stringNum = '1';
let intNum = Number(stringNum);

console.log(intNum); // prints 1 correctly

let text = 'one';
let textNum = Number(text);

console.log(textNum); // retunr NaN Not a Number 

let num = 1; 
let numLength = num.length;
console.log(numLength);  // undefined 
 
// console.log(num.toUpperCase()); // TypeError