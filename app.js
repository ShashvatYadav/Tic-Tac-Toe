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
let resetGame = () => {
    enableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    msgContainer.classList.add("hide");
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
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
        box.disabled = true;
        count++;
        findWinner();
    });
};

let findWinner = () => {
    for(let pattern of winPattern){
        const pat1 = pattern[0];
        const pat2 = pattern[1];
        const pat3 = pattern[2];
        if(boxes[pat1].innerText !== "" && boxes[pat2].innerText !== "" && boxes[pat3].innerText !== ""){
            if(boxes[pat1].innerText == boxes[pat2].innerText && boxes[pat2].innerText == boxes[pat3].innerText) {
                msg.innerText = `Winner is ${boxes[pat1].innerText}`;
                msgContainer.classList.remove("hide");
                disableBoxes();
            } else{
                if(count === 9){
                    msg.innerText = `Oops, Draw`;
                    msgContainer.classList.remove("hide");
                    disableBoxes();
                }
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);