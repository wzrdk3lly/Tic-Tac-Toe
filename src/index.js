// Initialize game board
const createBoard = () => {
  let boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  console.log("board array has been created ");
  return boardArray;
};

const gameState = () => {
  //Set up Game state
  let gameBoard = createBoard(); // gameboard = newArray(9)

  // Create player objects
  const player1 = player("Player X", "X");
  const player2 = player("player O", "O");

  //initialize turn at 2 to enable toggle in takeTurn() function
  let turn = 2;
  let gameWon = false;

  // grab query selectors needed for game front-end
  let boardContainer = document.querySelector("#board");
  let playerTurnDisplay = document.querySelector("#announcer");

  // callback for click events
  const takeTurns = (e) => {
    // Validation to prevent double turns
    if (e.target.innerText === "X" || e.target.innerText === "O") {
      alert("Inappropriate move");
      return;
    }
    // Toggles between players allowing them to take turns 
    // and checks for a winner after each turn
    if (turn % 2 === 0) {
      player1.takeTurn(e);

      // update gameboard data storage
      gameBoard[Number(e.target.id)] = e.target.innerText;

      
      console.log(gameBoard);

      isWinner(gameBoard,player1.getMark())
      // Display player turn
      playerTurnDisplay.innerText = `Player ${player2.getMark()} take your turn`;
      turn++;
    } else {
      player2.takeTurn(e);
      gameBoard[Number(e.target.id)] = e.target.innerText;
      console.log(gameBoard);
      isWinner(gameBoard, player2.getMark())
      // Display player turn
      playerTurnDisplay.innerText = `Player ${player1.getMark()} take your turn`;
      turn++;
    }

    if(turn === 11 && !gameWon){
      console.log("it's a tie")
    }

    function isWinner(gameBoard,playerMark){
      // console.log(typeof(gameBoard[0]),typeof(playerMark));
      // && gameBoard[1] === playerMark && gameBoard[2] === playerMark
      switch(true){
        // Horizontal Wins
        case (gameBoard[0] === playerMark && gameBoard[1] === playerMark && gameBoard[2] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
        // TODO Clear the gameboard 
          // TODO remove event listener once the game is won
          break;
        case (gameBoard[3] === playerMark && gameBoard[4] === playerMark && gameBoard[5] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        case (gameBoard[6] === playerMark && gameBoard[7] === playerMark && gameBoard[8] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        // Diagonal Wins
        case (gameBoard[0] === playerMark && gameBoard[4] === playerMark && gameBoard[8] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        case (gameBoard[2] === playerMark && gameBoard[4] === playerMark && gameBoard[6] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        // Vertical Wins
        case (gameBoard[0] === playerMark && gameBoard[3] === playerMark && gameBoard[6] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        case (gameBoard[1] === playerMark && gameBoard[4] === playerMark && gameBoard[7] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        case (gameBoard[2] === playerMark && gameBoard[5] === playerMark && gameBoard[8] === playerMark):
          console.log(`${playerMark} is the winner`);
          gameWon = true;
          break;
        default:
          return
      }
    }
  };

  boardContainer.addEventListener("click", takeTurns);
  console.log(`Player ${player1.getMark()} take your turn`);
};

const player = (name, mark) => {
  const getMark = () => mark;

  // place player mark inside clicked board position
  let takeTurn = (e) => {
    e.target.innerText = getMark();
  };
  return { takeTurn, getMark };
};

let newGame = gameState();

/**
 * TODO:
 * Objective - Create a tic - tac - toe game
 *
 * html/css
 * 1. Create a grid with 9 cells
 * 2. when you click on a grid cell an x pops up
 * 3. create same html and experiment for an o popping up
 * 4. Display will say Player X take your turn --
 *  - this will have an id of player blank take your turn
 *  - this will need some type of toggle functinality in js so that after
 *    player takes a turn it ask next player to take a turn
 *
 *
 *
 *
 * JS Code Functionality needed
 * 1. make first player "x"
 * 2. make second player "o"
 * 3. Add an event listener for the cells for marking x and O
 * 4. initalize an array to store player selected values
 * 5. after each player takes a turn update the array
 * 6. after each player takes a turn update the html on the screen to toggle
 *    and ask the other player to take their turn
 *      - Also include functionality so that a player can't take a turn over someone elses tic tac toe area
 * 7. Create some function that checks the array and determines if there is a winner or a tie
 *      - This function would be called after every array
 *
 * JS Code Module version
 * Create game object that holds game state
 *  - Every time a turn is made, the game state "turn" will need to update
 *  - on every turn call the player.taketurn() object up until there is a winner or 9 turns have been taken
 *
 * Create Player object that has a mark and take turn() function
 *  - when take turn is called allow there to be an event listener on the grid
 *  - whichever selection (id) the user gets, that position on the gameboard global array will be populated
 *  - at the end of the takeTurn() function call the isWinner() function where it takes the global array of the board
 *    and determines if there is a winner
 *
 * isWinner()
 *  - use global board array
 *  - iterate through board
 *  - if board[0] board[1] board[2] === same mark => 'same mark is winner '
 *  - if board[3] board[4] board[5] === smae mark => 'same mark is winner'
 *  - if board[6] board[7] board[8] == ...
 *  - if board[0] board[4] [8] == ..
 *  - if board[2] board[4] [6]
 * 
 *  - when a winner is determined clear the gameboard and remove gameboard event listener
 *
 * Bugs
 * - selecting div other than the square
 */
