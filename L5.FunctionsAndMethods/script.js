// console.log("Lesson 5: Functions And Methods");

// *********************function***********************

// function myFunction(msg) {
//     console.log("Welcome to Apna College");
//     console.log(msg);
// }

// myFunction("I love JS");

// function sum(a, b){
//     s = a+b;
//     return s;
// }

// let val = sum(34, 23);
// console.log(val);

// const arrowSum = (a, b) => {
//     console.log(a+b);
// }

// arrowSum(2,3);

// const multiply = (a,b) => {
//     return a*b;
// }

// let val = multiply(45, 9);

// console.log("The answer is:", val);

// function checkVowels(str1) {
//   let vowelsCount = 0;

//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] == "a") {
//       vowelsCount++;
//     } else if (str1[i] == "e") {
//       vowelsCount++;
//     } else if (str1[i] == "i") {
//       vowelsCount++;
//     } else if (str1[i] == "o") {
//       vowelsCount++;
//     } else if (str1[i] == "u") {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

// console.log(checkVowels("aeiou"));

// const usingArrow = (str1) => {
//   let mainCount = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (
//       str1[i] === "a" ||
//       str1[i] === "A" ||
//       str1[i] === "e" ||
//       str1[i] === "E" ||
//       str1[i] === "i" ||
//       str1[i] === "I" ||
//       str1[i] === "o" ||
//       str1[i] === "O" ||
//       str1[i] === "u" ||
//       str1[i] === "U"
//     ) {
//       mainCount++;
//     }
//   }
//   return mainCount;
// };

// console.log(usingArrow("aei"));

// let arr = [1,2,3,4,5];

// arr.forEach ((val) => {
//     console.log(val);
// });

// let arr = [2,3,4,5,6];

// let newArr = arr.map ((val) => {
//     return val*val;
// }) 

// console.log(newArr);

// arr.forEach((val) => {
//     console.log(val*val)
// });

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newArr = arr.filter ((val) => {
//     return val % 2 === 0;
// })

// console.log(newArr);

// let arr = [1,5,2,8,3,2,1,1];

// const output = arr.reduce ((prev, curr) => {
   
//         return prev > curr ? prev : curr;
    
// })

// console.log(output);
console.log("Answer 1");

let marks = [87,45,93,23,45,91,54,97,100,57,68];
console.log(marks);

let topStudents = marks.filter ((val) => {
    return val >= 90;
})

console.log(topStudents);

console.log("Answer 2");
let n = prompt("Enter the length of array:");

let arr = [];
for (let i=0; i<n; i++){
    arr[i] = i+1;
}

console.log(arr);

let sumArray = arr.reduce ((prev, curr) => {
    return prev + curr;
})

let mulArray = arr.reduce ((prev, curr) => {
    return prev * curr;
})
console.log("The sum of array is:", sumArray);

console.log("The product of array is:", mulArray);




