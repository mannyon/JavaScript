// console.log("Tic Tac Toe");

let btn = document.querySelectorAll(".box");

let count = 0;


for (let i=0; i<btn.length; i++){
    let p = document.querySelector(".playerwin");
    btn[i].addEventListener("click", () => {
    
        if(count%2===0){
            p.innerText = "Player O turn";
        }
        else {
            p.innerText = "Player X turn";
        }

        count++;
        if(count%2 === 1){
            btn[i].innerHTML = "<span>X</span>";
            
        
        }
        else {
            btn[i].innerHTML = "<span>O</span>";
            
      
        }

        btn[i].style.backgroundColor = "white";
        btn[i].style.color = "black";
        btn[i].disabled = true;
        
        
        /****************conditions for X***********************/
        
        if(btn[0].innerText === "X" && btn[1].innerText === "X" && btn[2].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[3].innerText === "X" && btn[4].innerText === "X" && btn[5].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[6].innerText === "X" && btn[7].innerText === "X" && btn[8].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[0].innerText === "X" && btn[3].innerText === "X" && btn[6].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[1].innerText === "X" && btn[4].innerText === "X" && btn[7].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[2].innerText === "X" && btn[5].innerText === "X" && btn[8].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[0].innerText === "X" && btn[4].innerText === "X" && btn[8].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }
        else if(btn[2].innerText === "X" && btn[4].innerText === "X" && btn[6].innerText === "X"){
            console.log("Player X is the winner")
            p.innerHTML = "<span class='winning-msg'>Player X Won</span>";
            disableAllButtons();
        }

        /*****************conditions for O***********************/

        else if(btn[0].innerText === "O" && btn[1].innerText === "O" && btn[2].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[3].innerText === "O" && btn[4].innerText === "O" && btn[5].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[6].innerText === "O" && btn[7].innerText === "O" && btn[8].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[0].innerText === "O" && btn[3].innerText === "O" && btn[6].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[1].innerText === "O" && btn[4].innerText === "O" && btn[7].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[2].innerText === "O" && btn[5].innerText === "O" && btn[8].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[0].innerText === "O" && btn[4].innerText === "O" && btn[8].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if(btn[2].innerText === "O" && btn[4].innerText === "O" && btn[6].innerText === "O"){
            console.log("Player O is the winner")
            p.innerHTML = "<span class='winning-msg'>Player O Won</span>";
            disableAllButtons();
        }
        else if (count === 9) {
            console.log("Game tied");
            p.innerHTML = "<span class='tie-message'>Game Tied</span>";
        }
       
        
    })
}

function disableAllButtons() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
    }
}
