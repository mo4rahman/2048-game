// Some pesudo-code to get a general sense of what we need to do to get at least a functional and working mvp

// We will want to do majority of the work in JS first, and make sure we have the
// functionality down before we dive into CSS and HTML. However, we will start
// with some basic CSS and HTML to at least visualize our game.

// Create Game board:
// Create a square board in the center of the page, with lines that divide the
// board into a 4x4 grid of empty white space
// - DONE

// Create Tiles:
// Have each square in our game board grid have the ability to display a square
// tile for each square (we can change the color and number based on js events)
// - DONE

// Initializing game:
// Have 2 random squares in our grid be a tile of 2 with a color (all same
// numbers should have the same color. every 2 will be beige, every 4 will be a
// darker beige, etc).

// We'll have 2 arrays. One with all the stored tiles, and one empty array that
// we will fill and update as the game is being played.
const allGameTiles = document.querySelectorAll(".game-tile");
const gameGrid = [];
for (i = 0; i < 16; i += 4) {
  gameGrid.push([
    allGameTiles[i],
    allGameTiles[i + 1],
    allGameTiles[i + 2],
    allGameTiles[i + 3],
  ]);
}

// Create an array for game-tile values
const gameValues = [];
for (let i = 0; i < 4; i++) {
  gameValues.push([0, 0, 0, 0]);
}

// Now tie together the values to the DOM
// We can put this into a function later to update our gameBoard
for (let i = 0; i < gameValues.length; i++) {
  for (let j = 0; j < gameValues[i].length; j++) {
    gameGrid[i][j].innerText = gameValues[i][j];
  }
}

function updateGameDisplay(gameGrid, gameValues) {
  for (let i = 0; i < gameValues.length; i++) {
    for (let j = 0; j < gameValues[i].length; j++) {
      gameGrid[i][j].innerText = gameValues[i][j];
    }
  }
}
// For now we'll focus on functionality and shifting numbers and making them
// appear. Later, we'll actually slide the tiles.
function shiftNumbersUp() {
  // Run when up arrow key pressed
  console.log("shift up");
}
function shiftNumbersDown() {
  console.log("shift down");
}
function shiftNumbersRight() {
  console.log("shift right");
}
function shiftNumbersLeft() {
  console.log("shift left");
}
function checkKey(e) {
  //   e = e || window.event;

  if (e.keyCode === 38) {
    // up arrow
    shiftNumbersUp();
  } else if (e.keyCode === 40) {
    // down arrow
    shiftNumbersDown();
  } else if (e.keyCode === 37) {
    // left arrow
    shiftNumbersLeft();
  } else if (e.keyCode === 39) {
    // right arrow
    shiftNumbersRight();
  }
}
document.onkeydown = checkKey;
// Events:
// Make JS listen for arrow key presses:
// (have to research, but I think there should be an option for a 'keydown' press
// or something like that. Each key should have a number attached to it.)
// Also create arrow key buttons that when clicked, will have the same
// functionality as when pressing respective arrow keys.
// Pressing a direction should have the tiles all shift the most they can in that
// direction (preferably with a sliding animation instead of just reappearing
// where they should be and refreshing.).
// The slide functionality will probably be put into a slide function since we
// will be doing that frequently.
// We will probably use 4 arrays and for loops to check each row when sliding in
// a certain direction.

// Checking Conditions:
// When moving in a direction, check to see if the preceding array (assuming
// there is, we can have a check for how far the element can travel) has any
// numbers (0 or empty string for blank). Also check to see if the number is same,
// if so then add the number and make the previous array element blank.
// Have a gameRunning flag to be true unless the board is filled with nowhere to
// slide, then that means the player has lost the game.

// Extra buttons/displays
// Have a New Game button to reset the game board (possibly make a
// "createGameboard()" function and have all that in there.)
// Have a score board keeping track of score, as well as comparing the score
// once the player loses and replaces best score if it's better than the best
// score, else does not save the score.

// Stretch Goals
// If i finish the project early, I can dive into creating a light mode/dark mode
// toggle to change the colors of the page/board.
