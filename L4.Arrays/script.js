// console.log("Lesson 4 Arrays");

// let heroes = ["ironman", "hulk", "thor", "batman", "spiderman"];

// for (let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// let shows = ["friends", "modern family", "brooklyn nine nine", "how i met your mother", "the office", "best of luck nikki", "shake it up"];

// for (let show of shows){
//     console.log(show);
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for (let i=0; i<marks.length; i++){
//     sum = sum+marks[i];
// }

// let average = sum/marks.length;

// console.log(average);

// let prices = [250,645,300,900,50];

// for (let i=0; i<prices.length; i++){
//     let offer = prices[i] / 10;
//     console.log(prices[i]-offer)
// }

// let shows = ["friends", "modern family", "the office","how i met your mother"];

// shows.pop();

// console.log(shows);
// let shows = [98, "modern family", 87,"how i met your mother"];
// let marks = ["hulk",9,34,23,78,56,89];

// console.log(shows.concat(marks));

// let count = [1,2,3,4,5,6,7];

// count.splice(2, 3, 10,20,30);

// console.log(count);

// ***********exercise********

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log("Task 1.", companies);

companies.splice(1, 1, "Ola");
console.log("Task 2.",companies);

companies.push("Amazon");
console.log("Task 3.",companies);