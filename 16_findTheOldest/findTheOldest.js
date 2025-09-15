const findTheOldest = function(people) {
    
    const ageArr = people.map((person) => person.yearOfDeath - person.yearOfBirth)

    // console.log(ageArr)
    let counter = 0; 
    let maxAge = ageArr[0];

    for(let i=0; i<(ageArr.length); i++) {
        if (ageArr[i] > maxAge) {
            maxAge = 
            ageArr[i];
            counter = i;
        }

    }
    return people[counter]

};
// Do not edit below this line
module.exports = findTheOldest;

// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

// findTheOldest(people)