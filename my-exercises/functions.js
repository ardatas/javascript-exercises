function add7 (number) {
    increasedNUm = number + 7;
    return increasedNUm;
}
console.log(add7(5));

function multiply(num1, num2) {
    multipliedNUm = num1 * num2;
    return multipliedNUm;
}
console.log(multiply(2, 2));

function capitalize(text = 'NO text provided.') {
    let initialChar = text[0].toUpperCase();
    let newText = initialChar;

    for (let i = 1; i < text.length ; i++) {
        capitalizedChar = text[i].toLowerCase();
        newText = newText + capitalizedChar;
    }
    return newText;
}

console.log(capitalize('arDa'));
console.log(capitalize('dfBFDffndjksfbBFNsksD'));

function capitalizeTwo (text = '') {
    if (!text) return ''; 
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

console.log(capitalizeTwo('dEnEmE'));

function lastletter (text ='') {
    if (!text) return '';
    let length = text.length;
    return text.slice(length-1); 


    // return text.slice(-1);
    // retunr text[text.length -1]
}
console.log(lastletter('LDBDLSNds'));
console.log(lastletter('fdsjfd(20'));