// let people = ['Arda', 'Umut', 'Elif']

// for (let human of people) {
//     console.log(human);
// }
// for (let human in people) {
//     console.log(human);
// }

// let human = people.map()
// console.log(human);

let checkPrime; 
let prime = [];
let n;

do {
    n = prompt('Prime integers till: ', 0)
} while (!n);

checkPrime: for (let i = 2; i <= n; i++) {
    for(let j = 2; j < n; j++) {
        if (i % j == 0) continue checkPrime;
    }
    console.log(`${i} is prime`);
} 

