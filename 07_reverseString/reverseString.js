const reverseString = function(string) {
    let reversedString = '';
    let stringArr = string.split('');
    for(let i = stringArr.length-1 ; i>=0 ; i--) {
        reversedString += stringArr[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
