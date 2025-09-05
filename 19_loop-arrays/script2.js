// const array = [1, 2, 3, 4, 5, 6];

// const sum = array.reduce((total, arrInt) => {
//     return total + arrInt 
// });

// console.log(sum);
// const shoppingList = [
//     {name: 'banana', price: 20},
//     {name: 'milk', price: 10},
//     {name: 'strak', price: 59}
// ];
// //
// const costSum = shoppingList.reduce((total, item) => {
//     return total + item.price;
// }, 0);
// console.log(costSum);

// const words = ['Hey', "I", 'am', 'Arda']; 
// const appendWords = words.reduce((sentence, word) => {
//     return sentence + " " + word;
// });

// // or 
// let joinedWords = words.join('-');

// console.log(appendWords);
// console.log(joinedWords);


// grades report

const grades = [];

getGradeReporter();

function randomGrades() {
    for(let i=0; i<10; i++) {
        var grade = Math.floor(Math.random() * 100) + 1;
        grades.push(grade);
     } 
}

function getGradeReporter() {
    randomGrades();
    const total = grades.reduce((total, grade) => total + grade, 0);
    const average = total / grades.length;
    const highest = grades.reduce((highest, grade) => {
        if (grade>highest) {
            return grade; 
        }
        return highest;
    }, 0);
    const lowest = grades.reduce((lowest, grade) => {
        return grade < lowest ? grade : lowest; 
    }, 100);
    console.log(`\n@@ THE GRADE REPORT OF BLABLA HIGH SCHOOL @@\n
    TOTAL OF GRADES: ${total}
    AVERAGE OF GRADES: ${average}
    HIGHEST OF GRADES: ${highest} 
    LOWEST OF GRADES ${lowest}\n`);


}

