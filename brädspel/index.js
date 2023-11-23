let currentPlayer = 'X';
let gameActive = true;

function placeSymbol(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWinner()) {
      alert('Spelare ' + currentPlayer + ' vinner!');
      gameActive = false;
    } else if (board.every(cell => cell !== '')) {
      alert('Det blev oavgjort!');
      gameActive = false;
    } else {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return (board[a] !== '' && board[a] === board[b] && board[a] === board[c]);
  });
}
