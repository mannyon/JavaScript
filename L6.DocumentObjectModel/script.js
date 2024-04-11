// console.log("Document Object Model");

// let heading = document.getElementById("heading");

// console.dir(heading)

// let headings = document.getElementsByClassName("heading-class");

// console.dir(headings);
// console.log(headings);

// let firstElement = document.querySelector("#myId");
// console.dir(firstElement);


// let allElement = document.querySelectorAll(".myClass");
// console.dir(allElement);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + " from Apna College Students";

// h2.append(" and by everyone");

let divs = document.querySelectorAll(".box");

let idx = 1;

for (div of divs){
    div.innerText = `new value is ${idx}`;
    idx++;
}


