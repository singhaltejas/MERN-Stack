const board = document.getElementById("board");
let arrBoard = Array(9).fill(NaN);
let turns = 0;
let currentPlayer = "X";

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("cell")) {
    const cellNumber = event.target.id;
    if (event.target.innerHTML === "") {
      var h1 = document.createElement("h1");
      var t = document.createTextNode(currentPlayer);
      h1.appendChild(t);
      event.target.appendChild(h1);
      arrBoard[cellNumber - 1] = currentPlayer;
      turns += 1;
      isWon();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
});

const winningCombos = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [6, 4, 2],
];

function isWon() {
  winningCombos.forEach((lst) => {
    let first = arrBoard[lst[0]];
    let second = arrBoard[lst[1]];
    let third = arrBoard[lst[2]];

    if (first && first === second && second === third) {
      alert(`${first} Won!`);
      turns = 0;
      arrBoard = Array(9).fill(NaN);
      clearBoard();
    }
  });

  if (turns === 9) {
    alert("Game is Over! Nobody Won");
    turns = 0;
    arrBoard = Array(9).fill(NaN);
    clearBoard();
  }
}

function clearBoard() {
  document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
}
