const board = new Array(9).fill(null);
const player = 'X';
const opponent = 'O';

function playMove(cell, index) {
    if (!board[index]) {
        board[index] = player;
        cell.innerText = player;
        if (checkWin(player)) {
            alert(player + ' wins!');
            return;
        }
        opponentMove();
    }
}

function opponentMove() {
    let emptyCells = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
    if (emptyCells.length > 0) {
        let move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[move] = opponent;
        document.getElementsByClassName('cell')[move].innerText = opponent;
        if (checkWin(opponent)) {
            alert(opponent + ' wins!');
        }
    }
}

function checkWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    return winConditions.some(condition => condition.every(index => board[index] === player));
}
