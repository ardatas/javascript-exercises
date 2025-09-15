const fibonacci = function(num1) {
    
    const num = Number(num1)
    if (num === 0) return 0
    if (num === 1) return 1
    if (num < 0) return("OOPS")
        
    let result; 
    let helper1 = 1;
    let helper2 = 0;

    for (let i = 2; i <= num; i++) {
        result = helper1 + helper2
        helper2 = helper1; 
        helper1 = result;
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;
