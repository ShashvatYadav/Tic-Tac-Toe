let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new-btn");

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

let turnO = true;
let count = 0;

// reset the game 
let resetGame = () => {
    enableBoxes();
    count = 0; // reset moves to 0
}

const disableBoxes = () =>{
    // disable each boxes
    for(let box of boxes){
        box.disabled = true;
    }
}
// reset or start new game
const enableBoxes = () =>{
    turnO = true;
    msgContainer.classList.add("hide"); // hide the msg container
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// go on each boxes 
for(let box of boxes){
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "#813C05";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "#FFD54F";
        }
        box.disabled = true; // disable clicked button
        count++; // move++
        findWinner(); // check for winner
    });
};

let findWinner = () => {
    let winner = false; // for draw 
    for(let pattern of winPattern){
        // take winner pattern 
        const pat1 = pattern[0];
        const pat2 = pattern[1];
        const pat3 = pattern[2];
        if(boxes[pat1].innerText !== "" && boxes[pat2].innerText !== "" && boxes[pat3].innerText !== ""){
            if(boxes[pat1].innerText == boxes[pat2].innerText && boxes[pat2].innerText == boxes[pat3].innerText) {
                msg.innerText = `Winner is ${boxes[pat1].innerText}`;
                msgContainer.classList.remove("hide"); // show msg Container
                disableBoxes(); // disable all the buttons 
                winner = true; // no need to check draw 
                return;
            } 
        }
    }
    // check Draw 
    if(!winner && count == 9){
        msg.innerText = `Oops, Draw`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

// reset game
resetBtn.addEventListener("click", resetGame);
// start new game
newBtn.addEventListener("click", resetGame);