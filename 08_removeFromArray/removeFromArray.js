const removeFromArray = function(arr, ...args) { 

    // const newArray = [];
    // arr.forEach((item) => {
    //     if (!args.includes(item)) {
    //         newArray.push(item);
    //     }
    // } )
    // return newArray;


    // filter keeps the items where the condition is TRUE
    // second way to do this with a function expression

    return arr.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;