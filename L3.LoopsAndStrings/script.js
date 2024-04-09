// for (let i=0; i<100; i++){
//     console.log("Apna College");
// }

// let n = 5;
// let sum = 0;

// for (let i=1; i<=n; i++){
//     sum = sum + i;
// }

// console.log(sum);

// let str = "Apna College";

// for (let i of str){
//     console.log("i =", i);
// }

// let student = {
//     fullName : "Manish Kumar",
//     age : 18,
//     cgpa : 9.4,
//     isPass : true
// };

// for (let key in student){
//     console.log(key, student[key]);
// }

// for (let i=0; i<=100; i++){
//     if (i%2 === 0){
//         console.log(i);
//     }
// }

// let i = 0;

// while (i<=100){
//     if (i%2 === 0){
//         console.log(i);
//     }
//     i++;
// }

// let i = 0;

// do {
//     if (i%2 === 0){
//         console.log(i);
//     }
//     i++;
// } while (i<=100)

// let number = 12;
// let a = prompt ("Enter your number: ");

// for (let i=0; i<=100; i++){
    
//     if (a == number){
//         console.log("Yayyy!!! you guessed the right number");
//         break;
//     }
//     else {
        
//         a = prompt("You guessed the wrong number. Guess again: ");
//     }
// }

// let num = 57;
// let a = prompt("Enter you number: ");

// while (a != num){
//     if (a == num-1 || a == num+1){
//         a = prompt("You were close. Guess again");
//     }
//     else {
//         a = prompt("You guessed wrong number. Guess again");
//     }
// }
// console.log("You guessed right number");


// ***************************Strings*********************************

// let str = "ApneCollege";

// let str2 = "Apna College";

// let obj = {
//     item : "pen",
//     price : 10
// };

// let output = `The cost of ${obj.item} is ₹${obj.price}.`;
// console.log(output);

// let str = "abc";

// console.log(str.toUpperCase());

let userName = prompt("Enter your name");

userName = userName.replace(/ +/g, "");

console.log(`@${userName}${userName.length}`);



