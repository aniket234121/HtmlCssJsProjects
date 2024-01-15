const reset = document.querySelector('#reset');
const boxes = document.querySelectorAll(".box");
const playerTurn = document.querySelector(".text");
const congratulation = document.querySelector(".congratulations");
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let currentPlayer = 'X'

let fillPos = ["", "", "", "", "", "", "", "", ""];
let Xplayer = []
let Yplayer = []
let board = 0;
gameStart();

function gameStart() {
    reset.addEventListener('click', resetGame)
    boxes.forEach(function (box) {
        box.addEventListener('click', function () {
            
            let val = box.getAttribute('data-item')
            let check = fillPos.indexOf(val)
            if (check == -1) {
                board++;
                fillPos[val] = val;
                box.innerHTML = "" + currentPlayer;
                // console.log(box.getAttribute('data-item'))
                if (currentPlayer === 'X') {
                    Xplayer.push(+val)
                    currentPlayer = 'O'
                }
                else {
                    Yplayer.push(+val)
                    currentPlayer = 'X'
                }

                changeTurn();
            }
            else {
                box.style.backgroundColor = "#e79393"
                setTimeout(function () { box.style.removeProperty('background-color') }, 200)
            }
            winning();
            if (board == 9) {
                draw();
            }
        })

    })

}
function draw() {

    document.querySelector(".text").innerHTML = "To Play Again Reset Board"
    congratulation.firstElementChild.innerHTML = "Draw"
    congratulation.style.display = "flex"
}

function changeTurn() {
    playerTurn.innerHTML = `${currentPlayer} Turn`
}
function resetGame() {
    reset.innerHTML = "Reset"
    boxes.forEach(box => box.innerHTML = "")

    currentPlayer = 'X'
    changeTurn();
    fillPos = ["", "", "", "", "", "", "", "", ""];
    Xplayer = []
    Yplayer = []
    congratulation.style.display = "none"
    congratulation.firstElementChild.innerHTML = "congratulations"
    board = 0
}
function winning() {

    for (let condition of win) {
        let count = 0;
        for (let i of condition) {
            for (let k = 0; k < Xplayer.length; k++) {
                // console.log(i+" "+Xplayer[k])
                if (i == Xplayer[k]) { count++; }

            }
        }
        if (count == 3) {

            congratulation.style.display = "flex"
            playerTurn.innerHTML = "X WINS"
            reset.innerHTML = "Play Again"
        }
    }
    for (let condition of win) {
        let count = 0;
        for (let i of condition) {
            for (let k = 0; k < Yplayer.length; k++) {
                // console.log(i+" "+Xplayer[k])
                if (i == Yplayer[k]) { count++; }

            }
        }
        if (count == 3) {

            congratulation.style.display = "flex"
            playerTurn.innerHTML = "O WINS"
            reset.innerHTML = "Play Again"
        }
    }
}