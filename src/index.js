// Initialize game board
const createBoard = () => {

  // Tic Tac Toe board as array
  let boardArray = ["0", "1", "2",
                    "3", "4", "5", 
                    "6", "7", "8"];
  return boardArray;
};

const gameState = () => {
  //Set up Game state
  let gameBoard = createBoard(); 

  // Create player objects
  const player1 = player("Player 1", "X");
  const player2 = player("Player 2", "O");
  let turn = 0;
  let gameWon = false;
  let winningPlayer = "";

  let boardContainer = document.querySelector("#board");
  let announcerDisplay = document.querySelector("#announcer");
  let restartButton = document.querySelector(".restart");

  //Initial player notification before they begin game
  announcerDisplay.innerText = `${player1.getName()} (${player1.getMark()}) take your turn`;

  const playPlayerMark = (e) => {
    try {
      // Validation check to prevent double turns
      if (isInvalidMove()) return;

      alternatePlayerTurn();

      if (isTie()) {
        announcerDisplay.innerText = "It's a Tie!";
        disableGameBoard();
      } else if (gameWon) {
        announcerDisplay.innerText = `${winningPlayer} Won!`;
        disableGameBoard();
      }
    } catch (error) {
      alert("Mistakes were made");
    }

    // Toggles between the marks that players are able to place on game board
    function alternatePlayerTurn() {
      if (turn % 2 === 0) {
        player1.takeTurn(e);
        updateGameBoardArray();

        isWinner(gameBoard, player1.getMark(), player1.getName());
        // Display player turn
        announcerDisplay.innerText = `${player2.getName()} (${player2.getMark()}) take your turn`;
        turn++;
      } else {
        player2.takeTurn(e);
        updateGameBoardArray();

        isWinner(gameBoard, player2.getMark(), player2.getName());
        // Display player turn
        announcerDisplay.innerText = `${player1.getName()} (${player1.getMark()}) take your turn`;
        turn++;
      }
    }

    function isWinner(gameBoard, playerMark, playerName) {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];

      winningCombinations.forEach((i) => {
        if (
          gameBoard[i[0]] === playerMark &&
          gameBoard[i[1]] === playerMark &&
          gameBoard[i[2]] === playerMark
        ) {
          gameWon = true;
          winningPlayer = playerName;
        }
      });
    }

    function isTie() {
      return turn === 9 && !gameWon;
    }

    function isInvalidMove() {
      if (e.target.innerText === "X" || e.target.innerText === "O") {
        alert("Inappropriate move");
        return true;
      }
    }

    function updateGameBoardArray() {
      gameBoard[Number(e.target.id)] = e.target.innerText;
    }

    function disableGameBoard() {
      boardContainer.removeEventListener("mousedown", playPlayerMark);
    }
  };

  // Activates game board to allow player mark placement on mousedown
  boardContainer.addEventListener("mousedown", playPlayerMark);

  // Reload page to restart
  restartButton.addEventListener("mousedown", () => {
    window.location.reload();
  });
};

const player = (name, mark) => {
  const getMark = () => mark;
  let getName = () => name;

  // place player mark inside clicked board position
  let takeTurn = (e) => {
    e.target.innerText = getMark();
  };
  return { takeTurn, getMark, getName };
};

let newGame = gameState();
