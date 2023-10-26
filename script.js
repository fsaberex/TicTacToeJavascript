const playerOne = {
    name:"",
    num:1,
    occupiedCells:[],
}

const playerTwo = {
    name:"",
    num:2,
    occupiedCells:[],
}

playerOne.name = prompt("Player 1 enter your name (You will be X's)", "Player 1");
playerTwo.name = prompt("Player 2 enter your name (You will be O's)", "Player 2");

let winner = false;
const players = [playerOne, playerTwo];
let player = players[0];




function switchToNextPlayer() {
    if(player.num === 1){
        alert("It's your turn " + player.name + "!");
        document.getElementById("cell1").addEventListener("click", changeCellOneX);
        document.getElementById("cell2").addEventListener("click", changeCellTwoX);
        document.getElementById("cell3").addEventListener("click", changeCellThreeX);
        document.getElementById("cell4").addEventListener("click", changeCellFourX);
        document.getElementById("cell5").addEventListener("click", changeCellFiveX);
        document.getElementById("cell6").addEventListener("click", changeCellSixX);
        document.getElementById("cell7").addEventListener("click", changeCellSevenX);
        document.getElementById("cell8").addEventListener("click", changeCellEightX);
        document.getElementById("cell9").addEventListener("click", changeCellNineX);
        player = players[1];
        console.log(player);
    }
    if(player.num === 2){
        alert("It's your turn " + player.name + "!");
        document.getElementById("cell1").addEventListener("click", changeCellOneO);
        document.getElementById("cell2").addEventListener("click", changeCellTwoO);
        document.getElementById("cell3").addEventListener("click", changeCellThreeO);
        document.getElementById("cell4").addEventListener("click", changeCellFourO);
        document.getElementById("cell5").addEventListener("click", changeCellFiveO);
        document.getElementById("cell6").addEventListener("click", changeCellSixO);
        document.getElementById("cell7").addEventListener("click", changeCellSevenO);
        document.getElementById("cell8").addEventListener("click", changeCellEightO);
        document.getElementById("cell9").addEventListener("click", changeCellNineO);
        player = players[0];
    }
}

function changeCellOneX () {
    document.getElementById("cell1").textContent = 'X';
    players[0].occupiedCells.push("cell1");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellTwoX () {
    document.getElementById("cell2").textContent = 'X';
    players[0].occupiedCells.push("cell2");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellThreeX () {
    document.getElementById("cell3").textContent = 'X';
    players[0].occupiedCells.push("cell3");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellFourX () {
    document.getElementById("cell4").textContent = 'X';
    players[0].occupiedCells.push("cell4");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellFiveX () {
    document.getElementById("cell5").textContent = 'X';
    players[0].occupiedCells.push("cell5");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellSixX () {
    document.getElementById("cell6").textContent = 'X';
    players[0].occupiedCells.push("cell6");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellSevenX () {
    document.getElementById("cell7").textContent = 'X';
    players[0].occupiedCells.push("cell7");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellEightX () {
    document.getElementById("cell8").textContent = 'X';
    players[0].occupiedCells.push("cell8");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellNineX () {
    document.getElementById("cell9").textContent = 'X';
    players[0].occupiedCells.push("cell9");
    checkBoard(players[0]);
    switchToNextPlayer();
}

function changeCellOneO () {
    document.getElementById("cell1").textContent = 'O';
    players[1].occupiedCells.push("cell1");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellTwoO () {
    document.getElementById("cell2").textContent = 'O';
    players[1].occupiedCells.push("cell2");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellThreeO () {
    document.getElementById("cell3").textContent = 'O';
    players[1].occupiedCells.push("cell3");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellFourO () {
    document.getElementById("cell4").textContent = 'O';
    players[1].occupiedCells.push("cell4");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellFiveO () {
    document.getElementById("cell5").textContent = 'O';
    players[1].occupiedCells.push("cell5");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellSixO () {
    document.getElementById("cell6").textContent = 'O';
    players[1].occupiedCells.push("cell6");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellSevenO () {
    document.getElementById("cell7").textContent = 'O';
    players[1].occupiedCells.push("cell7");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellEightO () {
    document.getElementById("cell8").textContent = 'O';
    players[1].occupiedCells.push("cell8");
    checkBoard(players[1]);
    switchToNextPlayer();
}

function changeCellNineO () {
    document.getElementById("cell9").textContent = 'O';
    players[1].occupiedCells.push("cell9");
    checkBoard(players[1]);
    switchToNextPlayer();
}


function checkBoard (player) {
    const winningCells = [["cell1","cell2","cell3"], ["cell4","cell5","cell6"], ["cell7","cell8","cell9"], ["cell1","cell4","cell7"], ["cell2","cell5","cell8"], ["cell3","cell6","cell9"], ["cell1","cell5","cell9"], ["cell3","cell5","cell7"]];
    
    for(let i=0; i < winningCells.length; i++) {
        //console.log(winningCells[i]);
        const winningCombo = winningCells[i];
        let match = 0;

        for (let j =0; j < winningCombo.length; j++) {
            if (player.occupiedCells.includes(winningCombo[j])) {
                match++;
            }
        }

        if (match === winningCombo.length) {
            winner = true;
            alert(player.name + " Wins!");
            break;
        }

    }
    

}

function endTurn () {

}

function endGame () {

}

function clearBoard () {

}

