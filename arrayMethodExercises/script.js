// map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary]
// let names = users.map(item => item.name)
let names = [];
users.forEach((item) => names.push(item.name))

console.log(names);

// map to object
let arda = {name: 'john', surname: 'smith', id: 1};
let umut = {name: 'umut', surname: 'xyz', id: 2};
let kerem = {name: 'kerem', surname: 'abc', id: 3};

let people = [arda, umut, kerem]
let peopleMapped = people.map(item => {
    return {
        fullName: item.name + ' ' + item.surname,
        id: item.id,
    }
})
console.log(peopleMapped)

//sort users by age

let unsortedArr = [pete, john, mary];

function sortByAge(arr) {
    const sortedArr = arr.toSorted((a, b) => a.age - b.age);
    return sortedArr;
} // -1 if smaller -> moves item to left
// 0 if equal -> no movement
// +1 if greater -> moves item to right in array

// "property" is the property to sort accordingly 
// sort((item a, item b) => item.a.property - item.b.property)

// sortByAge(unsortedArr)
console.log(unsortedArr)
console.log(sortByAge(unsortedArr))

// sort method sorts the array itself [by default according to unicode string values] 
// toSorted method sorts the array items in a new array 


// shuffle

let numArr = [1, 2, 3, 4, 5]

function shuffle (numArr) {

    for(let i = numArr.length-1 ; i > 0 ; i--) {
        
        let j = Math.floor(Math.random()*(i+1));
        // let swappedItem = numArr[i];w
        // numArr[i] = numArr[j];
        // numArr[j] = swappedItem;
        [numArr[i], numArr[j]] = [numArr[j], numArr[i]]
    }
    return numArr;
}

console.log(shuffle(numArr))
console.log(shuffle(numArr))
console.log(shuffle(numArr))
console.log(shuffle(numArr))

function getAverageAge(arr) {
    return Math.round(arr.reduce((totalAge, person) => person.age + totalAge, 0) / arr.length)
}

console.log(getAverageAge(users))

let group = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    return arr.reduce((newArr, item) => {
        newArr[item.id] = item;
        return newArr
    }, {})
}

console.log(groupById(group))