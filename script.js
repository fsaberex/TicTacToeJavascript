const playerOne = {
    name:"",
    num:1,
    symbol: "X",
    occupiedCells:[],
    Wins:0,
}

const playerTwo = {
    name:"",
    num:2,
    symbol: "O",
    occupiedCells:[],
    Wins:0,
}

const cells = document.querySelectorAll('[data-cell]');
const gameMessage = document.getElementById('game-message');
const restartButton = document.getElementById('restart-button');

startGame = true;

playerOne.name = prompt("Player 1 enter your name (You will be X's)", "Player 1");
playerTwo.name = prompt("Player 2 enter your name (You will be O's)", "Player 2");

let winner = false;
let currentPlayer = playerOne;

function handleCellClick(e) {
    const cell = e.target;

    if (cell.textContent !== '' || !startGame) {
        return;
    }

    cell.textContent = currentPlayer.symbol;
    cell.classList.add(currentPlayer.symbol);
    // cell.classList.push(currentPlayer.occupiedCells);
    console.log(cell.classList);
    currentPlayer.occupiedCells.push(cell.classlist);

    if (checkBoard()) {
        endGame(false);
    } else if (fullBoard()) {
        endGame(true);
    } else {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        alert("It's your turn " + currentPlayer.name + "!");
    }
}


function checkBoard () {
    const winningCells = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for(let i=0; i < winningCells.length; i++) {
        //console.log(winningCells[i]);
        const winningCombo = winningCells[i];
        let match = 0;

        for (let j =0; j < winningCombo.length; j++) {
            if (currentPlayer.occupiedCells.includes(winningCombo[j])) {
                match++;
            }
        }

        if (match === winningCombo.length) {
            return winner = true;
            // alert(player.name + " Wins!");
            // break;
        }

    }
    

}


function fullBoard() {
    return [...cells].every(cell => cell.textContent !== '');
}


function endGame () {
    gameStart = false;

    if (draw) {
        gameMessage.textContent = "It\'s a Draw!";
    } 
    if (winner === true) {
        gameMessage.textContent = currentPlayer.name + "wins!";
        currentPlayer.Wins = currentPlayer.Wins++;
    }
    //gameMessage.style.display = 'block';
}


function clearBoard () {
    currentPlayer = playerOne;
    gameStart = true;
    //gameMessage.style.display = 'none';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });

}


cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', clearBoard);

