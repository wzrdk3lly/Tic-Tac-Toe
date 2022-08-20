//avoid global scope pls :)
// create gameboard players as factory function 
    // pass the gameboard to the player as a parameter when manipulating it(the game board)

// 
// create something to manually fill up the contents of the board when rendering in html

const GameBoard = () => {
    let body = document.getElementById("body")

    
    const board = () => {
        return [" "," "," "," "," "," "," "," ",];
    }

    body.innerHTML = board()
   

    return {board}
};

let newBoard = GameBoard();




