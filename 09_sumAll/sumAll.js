const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (a > b) {
        const change = b; 
        b = a;
        a = change;
    }

    const arr = [];
    for (a; a <= b; a++) {
        arr.push(a);
    }

    let sumRange = arr.reduce((sum, current) => sum + current, 0);
    return sumRange;
};

// Do not edit below this line
module.exports = sumAll;

