// Some pesudo-code to get a general sense of what we need to do to get at least a functional and working mvp

// We will want to do majority of the work in JS first, and make sure we have the
// functionality down before we dive into CSS and HTML. However, we will start
// with some basic CSS and HTML to at least visualize our game.

// Create Game board:
// Create a square board in the center of the page, with lines that divide the
// board into a 4x4 grid of empty white space

// Create Tiles:
// Have each square in our game board grid have the ability to display a square
// tile for each square (we can change the color and number based on js events)

// Initializing game:
// Have 2 random squares in our grid be a tile of 2 with a color (all same
// numbers should have the same color. every 2 will be beige, every 4 will be a
// darker beige, etc).
//

// Events:
// Make JS listen for arrow key presses:
// (have to research, but I think there should be an option for a 'keydown' press
// or something like that)
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

// If i finish the project early, I can dive into creating a light mode/dark mode
// toggle to change the colors of the page/board.
