// console.log("Hello World");

// btn1.onclick = (e) => {
//    console.log(e);
// }

// let box1 = document.querySelector(".box1");

// box1.onmouseover = () => {
//     console.log("I am inside the box");
//     let a = 4;
//     let b = 7;
//     console.log(a*b);
// }

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("i was clicked - handler 1");
// });

// btn1.addEventListener("click", () => {
//     console.log("event - Handler 2");
// });

// const handler3 =  () => {
//     console.log("i was clicked - handler 3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("event - Handler 4");
// });

// btn1.removeEventListener("click", handler3);

// let btn1 = document.querySelector("#themebtn");
// let body = document.body.getAttribute("class");


// // btn1.getAttribute("class");
// // console.log(btn1);
// let count = 0;
// btn1.addEventListener("click",() => {
    
//     count++;
//     if (count == 1){
//         btn1.addEventListener("click", () => {
//             document.body.setAttribute("class", "black");
//           });
//     }
//     else if (count % 2 == 1){
//         btn1.addEventListener("click", () => {
//             document.body.setAttribute("class", "black");
//           });
//     }
    
//     else {
    
//     btn1.addEventListener("click", () => {
//         document.body.setAttribute("class", "light");
//     })
    
//     }
// })


let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click", () => {
    
    if (currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

});



