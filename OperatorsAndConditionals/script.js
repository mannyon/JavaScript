console.log("Lesson 2 on Operators And Conditionals");

// let a = 2;
// let b = 4;
// let c = a+b;

// console.log("a + b = c");
// console.log("a =", a, "& b =", b);
// console.log(a + " + " + b + " =", c );

// let a = 5;
// let b = "5";

// console.log("a === b", a===b)

// let a = 13;

// if (a%2 === 0){
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

// let age = 18;

// if (age < 18){
//     console.log("Junior");
// }
// else if (age > 60){
//     console.log("Senior");
// }
// else {
//     console.log("Middle");
// }

// let age = 18;

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);

// let a = prompt ("Enter a number: ");

// if (a%5 === 0){
//     console.log(a, "is a multiple of 5");
// }
// else {
//     console.log(a, "is not a multiple of 5");
// }

let marks = prompt ("Enter your marks");
if (marks > 100){
    console.log("Invalid marks");
}
else if (marks >= 80){
    console.log("Your grade is A");
}
else if (marks >= 70){
    console.log("Your grade is B");
}
else if (marks >= 60){
    console.log("Your grade is C");
}
else if (marks >= 50){
    console.log("Your grade is D");
}
else {
    console.log("You failed your examination");
}