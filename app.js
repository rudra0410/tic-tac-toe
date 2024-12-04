let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset-btn")
let newGame_btn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let count = 0

let turnO = true    //player:X , player:O

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 3, 6],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    turnO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        if (turnO) {
            // player:O
            box.innerText = "O"
            turnO = false
        }
        else {
            // player:X
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        count++

        if(count ==9 && !checkWinner()){
            gameDraw()
        }

        checkWinner()
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}🏆🥇🥳`
    msgContainer.classList.remove("hide")
    console.log("draw")
}

const gameDraw = () => {
    msg.innerText = "Game is Draw😦"
    msgContainer.classList.remove("hide")
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = " "
    }
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val)
                disableBoxes()
            }
        }
        
    }
}

newGame_btn.addEventListener("click", resetGame)
reset_btn.addEventListener("click", resetGame)