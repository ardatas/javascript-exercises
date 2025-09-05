let string = 'Sentence-to-be-splitted-and-camelized';

camelize(string);

function camelize (string) {
    const arr = string.split('-');
    const sentence = arr.reduce((sentence, word) =>  sentence + ' ' + word)
    console.log(sentence);
}

//

let unfilteredArr = [];

function filterRange (arr, a, b) {
    while(unfilteredArr.length < 50) {
        unfilteredArr.push(Math.floor(Math.random() * 100) + 1);
    }

    const filteredArr = unfilteredArr.filter(int => a < int && int < b);

    // const filteredArr =  unfilteredArr.reduce((acc, int) => {
    //     if (a < int && int < b) {
    //         acc.push(int);
    //     }
    //     return acc;
    // }, []);

    console.log(filteredArr);
}

// filterRange(unfilteredArr, 20, 50);


// 


function filterRangeInPlace (arr, a, b) {

    //create a random array with of length 20 
    while(unfilteredArr.length < 20) {
        unfilteredArr.push(Math.floor(Math.random() * 100) + 1);
    }

    let filterInRange = unfilteredArr.reduce((newArr, int) => {
        if (int >= a && int <= b) { 
            newArr.push(int);
        }
        return newArr;

    }, []);

    console.log(filterInRange);
} 

filterRangeInPlace(unfilteredArr, 20, 60);

//

