const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let's create a function to initialize the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // Empty UI
    boxes.forEach((box, index) =>{
        box.innerText = "";
        //set pointer events to all
        boxes[index].style.pointerEvents = "all";
        // missing - initialize box with css property again once we got a winner
        box.classList = `box box${index+1}`;

    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    //UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){
    let answer = "";

    winningPositions.forEach((position) => {
        // all 3 boxes should be non empty and exactly same in value
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){

            //check if winner is X
            if(gameGrid[position[0]] === "X")
                answer = "X";
            else
                answer = "O";

            // disable pointer events once we got our answer
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })


            // Now we Know X/O is a winner
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    
    // It mean we have winner
    if(answer !== ""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    /* 
        I think we don't need to check fillCount as we are 
        returning if we got our winner in above if statement
    */

    // when there is no winner i.e tie
    let fillCount = 0;
    gameGrid.forEach((box) =>{
        if(box !== "")
            fillCount++;
    });

    // board is filled, game is TIE
    if(fillCount === 9){
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        // remove pointerEvents which are already clicked
        boxes[index].style.pointerEvents = "none";
        // swap turn
        swapTurn();
        //check for game over
        checkGameOver();
    }
}
boxes.forEach((box, index) =>{
    box.addEventListener("click", () => {
        handleClick(index);
    });
});


newGameBtn.addEventListener("click", initGame);
