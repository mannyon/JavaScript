// console.log("DOM Part 2");

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let fullName = div.getAttribute("name");
// console.log(fullName)

// let para = div.getAttribute("class");
// console.log(para);

// let para = document.querySelector("p");
// console.log(para);

// let para1 = para.getAttribute("class");
// console.log(para1);

// para1 = para.setAttribute("class", "newClass");

// let div = document.querySelector("div");

// let id = div.getAttribute("id");

// id = div.setAttribute("id", "newBox");

// let fullName = div.getAttribute("name");
// fullName = div.setAttribute("name", "newJs");

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "1.2rem";
// div.style.color = "yellow";

// div.innerText = "Helllo there i am learning atrributes in JavaScript";
// div.style.overflow = "scroll";
// div.style.overflowX = "hidden"

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";


// let div = document.querySelector("div");

// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
// div.remove();

// let p = document.querySelector("p");

// p.after(newBtn);

// let heading = document.createElement("h1");
// heading.innerHTML = "<i>This is my Heading</i>";

// let body = document.querySelector("body");

// body.prepend(heading);

// heading.style.color = "purple";
// heading.style.textDecoration = "underline";

// let para = document.querySelector("p");

// para.remove();

// heading.remove();
// let div = document.querySelector("div");
// let p = document.createElement("p");
// document.body.appendChild(p);

// let fragment = document.createDocumentFragment();
// let li = fragment

// .appendChild(document.createElement("section"))
// .appendChild(document.createElement("ul"))
// .appendChild(document.createElement("li"));

// li.textContent = "Hello World";

// document.body.appendChild(fragment);

// let ul = document.querySelector("ul");

// let node = document.createElement("li");
// let textNode = document.createTextNode ("Water");

// node.appendChild(textNode);

// ul.removeChild(node);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.body.prepend(newBtn);

// let para = document.querySelector("p");

// para.classList.add("newClass");

function myFunction () {
    let list = document.querySelector(".myClass");
    list.classList.add("newClass");
    let para = document.querySelector("p");
    para.innerHTML = "<i> i will secure air 1 in nimcet";
    let newBtn = document.createElement("button");
    newBtn.innerText = "click me too";
    para.after(newBtn);
    para.setAttribute("class", "onlclick")
}




