// console.log("stone paper scissors");

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let handSign = document.querySelector(".hand-sign");
let pickMove1 = document.getElementsByClassName("pick-move");
let marksOfYou = document.getElementsByClassName("markOfYou");
let marksOfComp = document.getElementsByClassName("marksOfComp");


// *******************************conditions for Rock****************************
let compCount = 0;
let youCount = 0;
rock.addEventListener("click", () => {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        compCount++;
        pickMove1[0].innerHTML = '<p class="pick-move-paper" id="pick-move1">You lost</p>';
        marksOfComp[0].innerHTML = `<p class="marks marksOfComp">${compCount}</p>`;
    }
    else if (randomNumber < 2 / 3) {
        pickMove1[0].innerHTML =  '<p class="pick-move-scissor" id="pick-move1">You won</p>';
        youCount++;
        marksOfYou[0].innerHTML = `<p class="marks markOfYou">${youCount}</p>`;
    }
    else {
        pickMove1[0].innerHTML = '<p class="pick-move" id="pick-move1">Game was draw</p>';
    }
})


// *******************************conditions for Paper****************************

paper.addEventListener("click", () => {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        compCount++;
        pickMove1[0].innerHTML = '<p class="pick-move-paper" id="pick-move1">You lost</p>';
        marksOfComp[0].innerHTML = `<p class="marks marksOfComp">${compCount}</p>`;
    }
    else if (randomNumber < 2 / 3) {
        pickMove1[0].innerHTML = '<p class="pick-move-scissor" id="pick-move1">You Won</p>';
        youCount++;
        marksOfYou[0].innerHTML = `<p class="marks markOfYou">${youCount}</p>`;
    }
    else {
        pickMove1[0].innerHTML = '<p class="pick-move" id="pick-move1">Game was draw</p>';
    }
})


// *******************************conditions for Scissor****************************

scissor.addEventListener("click", () => {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        compCount++;
        pickMove1[0].innerHTML = '<p class="pick-move-paper" id="pick-move1">You lost</p>';
        marksOfComp[0].innerHTML = `<p class="marks marksOfComp">${compCount}</p>`;
    }
    else if (randomNumber < 2 / 3) {
        pickMove1[0].innerHTML = '<p class="pick-move-scissor" id="pick-move1">You Won</p>';
        youCount++;
        marksOfYou[0].innerHTML = `<p class="marks markOfYou">${youCount}</p>`;
    }
    else {
        pickMove1[0].innerHTML = '<p class="pick-move" id="pick-move1">Game was draw</p>';
    }
})
