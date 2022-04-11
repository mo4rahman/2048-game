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

// We'll have 2 arrays. One with all the stored tiles, and one array filled with 0's that
// we will fill and update as the game is being played.
// #FIXME: Refactor later and create a 'createGameboard' function
const allGameTiles = document.querySelectorAll(".game-tile");
const gameDisplay = [];
for (i = 0; i < 16; i += 4) {
  gameDisplay.push([
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
// Updates old display with current changes after keypress. We will
// also use this to initialize the board at the start of the game.
function updateGameDisplay(gameDisplay, gameValues) {
  for (let i = 0; i < gameValues.length; i++) {
    for (let j = 0; j < gameValues[i].length; j++) {
      gameDisplay[i][j].innerText = gameValues[i][j];
    }
  }
}

// For now we'll focus on functionality and shifting numbers and making them
// appear. When we finsih, we'll actually slide the tiles visually.
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

// We will have to continuously create random tiles with a value of 2 on the
// board, so we will put it in a function.
// TODO: Would it be better to have tiles all in one
// array, or have an array of row values?
function newRandomTile(gameValues) {
  let randomRow;
  let randomCol;
  while (true) {
    // Returns a random integer from 0 to 3 inclusive:
    randomRow = Math.floor(Math.random() * 4);
    randomCol = Math.floor(Math.random() * 4);
    if (gameValues[randomRow][randomCol] === 0) {
      gameValues[randomRow][randomCol] = 2;
      return;
    }
  }
}

// Main Game loop
let gameRun = true;

// INITIALIZE THE BOARD
// We'll start by picking 2 random numbers between 0 and 15 (for the tiles
// on the board) and then setting them equal to 2.
newRandomTile(gameValues);
newRandomTile(gameValues);
updateGameDisplay(gameDisplay, gameValues);

// Used document.onkeydown because I looked it up on
// google, but then I found that we can just use our
// addEventListener like we always have
addEventListener("keydown", function (e) {
  // keyCode is technically depracated (“inconsistent across platforms and even the same implementation on different operating systems or using different localizations.” according to a medium article)

  // Used just in case somehow, someone is running my game in an earlier
  // version of Internet Explorer that doesn't pass in the window event.
  e = e || window.event;
  key = e.key || e.keyCode;
  if (gameRun) {
    if (key === 38 || key === "ArrowUp") {
      // up arrow
      shiftNumbersUp();
    } else if (key === 40 || key === "ArrowDown") {
      // down arrow
      shiftNumbersDown();
    } else if (key === 37 || key === "ArrowLeft") {
      // left arrow
      shiftNumbersLeft();
    } else if (key === 39 || key === "ArrowRight") {
      // right arrow
      shiftNumbersRight();
    }
  }
});
