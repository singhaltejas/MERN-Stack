const board = document.getElementById("board");

let currentPlayer = "X";

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("cell")) {
    const cellNumber = event.target.id;
    console.log();
    if (event.target.innerHTML === "") {
      var h1 = document.createElement("h1");
      var t = document.createTextNode(currentPlayer);
      h1.appendChild(t);
      event.target.appendChild(h1);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
});
