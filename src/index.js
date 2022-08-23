

const createBoard = () => {
    let boardArray = ["0","1","2",
                         "3","4","5"
                        ,"6","7","8"];

    // body.innerHTML = boardArray;

    return boardArray
};

const gameState = () => {

    let gameBoard = createBoard(); // gameboard = newArray(9)

    let player1 = player("Player1", "X");
    let player2 = player("player2", "O");

    let turn = 2

    // Alternates players turns 
    while (true) {
        if (turn % 2 === 0){
        player1.takeTurn()
        }
        else{
        player2.takeTurn()
        }
        turn++;
    }
}

const player = (name, mark) => {

    const getMark = () => mark

    let takeTurn = () => {
        console.log(`${name} is taking a turn`)
        // let playerSpace = document.queryselector(playerSpace) 
        // playerSpace.addEventlistener("click", (e) => { gameboard[e.id] = getMark()}


    }
    return {takeTurn, getMark}


}


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
 * JS Code
 * 1. make first player "x"
 * 2. make second player "o"
 * 3. Add an event listener for the cells for marking x and O 
 * 4. initalize an array to store player selected values 
 * 5. after each player takes a turn update the array 
 * 6. after each player takes a turn update the html on the screen to toggle
 *    and ask the other player to take their turn
 * 7. Create some function that checks the array and determines if there is a winner or a tie
 *     - This function would be called after every array 
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
 * 
 */







