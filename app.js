// Initialize DOM variables and other variables needed on top.
let titleDisplay = document.querySelector("#title");
titleDisplay.innerHTML =
  "Welcome to 2048!<br>Press any arrow key to start playing.";
let gameResult = document.querySelector("#game-result");
let newGameBtn = document.querySelector("#new-game");
let bestDisplay = document.querySelector("#best");
let bestValue = 0;

// We'll have 2 arrays. One with all the stored tiles, and one array filled with 0's that
// we will fill and update as the game is being played.
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

function updateGameDisplay(gameDisplay, gameValues) {
  // Updates old display with current changes after keypress. We will
  // also use this to initialize the board at the start of the game.
  for (let i = 0; i < gameValues.length; i++) {
    for (let j = 0; j < gameValues[i].length; j++) {
      if (gameValues[i][j] === 0) {
        gameDisplay[i][j].innerText = "";
        updateColor(gameValues[i][j], gameDisplay[i][j]);
      } else {
        gameDisplay[i][j].innerText = gameValues[i][j];
        updateColor(gameValues[i][j], gameDisplay[i][j]);
      }
    }
  }
}

function updateColor(gameValueItem, gameDisplayItem) {
  // Change the color of the tiles

  if (gameValueItem === 2) {
    gameDisplayItem.style.backgroundColor = "red";
  } else if (gameValueItem === 4) {
    gameDisplayItem.style.backgroundColor = "blue";
  } else if (gameValueItem === 8) {
    gameDisplayItem.style.backgroundColor = "green";
  } else if (gameValueItem === 16) {
    gameDisplayItem.style.backgroundColor = "orange";
  } else if (gameValueItem === 32) {
    gameDisplayItem.style.backgroundColor = "blue";
  } else if (gameValueItem === 64) {
    gameDisplayItem.style.backgroundColor = "yellow";
  } else if (gameValueItem === 128) {
    gameDisplayItem.style.backgroundColor = "purple";
  } else if (gameValueItem === 256) {
    gameDisplayItem.style.backgroundColor = "grey";
  } else if (gameValueItem === 512) {
    gameDisplayItem.style.backgroundColor = "gold";
  } else if (gameValueItem === 1024) {
    gameDisplayItem.style.backgroundColor = "turquoise";
  } else if (gameValueItem === 2048) {
    gameDisplayItem.style.backgroundColor = "darkseagreen";
  } else {
    gameDisplayItem.style.backgroundColor = "blanchedalmond";
  }
}

// IMPORTANT! WHICHEVER WAY WE'RE SHIFTING, START WORKING
// FROM THE FARTHEST MOST SIDE. FOR EXAMPLE, IF WE'RE
// SHIFTING UP, START FROM TOP ROW AND TRICKLED DOWN
function shiftNumbersUp(gameValues) {
  // Shift every tile as far up as they can go
  // We"ll go row by row through each element
  // We'll start with row 1 because row 0 can't move up at row 0
  for (let i = 1; i < gameValues.length; i++) {
    for (let j = 0; j < gameValues[i].length; j++) {
      if (i === 1) {
        if (gameValues[i][j] === 0) {
          continue;
        } else {
          if (gameValues[i - 1][j] === 0) {
            gameValues[i - 1][j] = gameValues[i][j];
            gameValues[i][j] = 0;
          } else if (gameValues[i - 1][j] === gameValues[i][j]) {
            gameValues[i - 1][j] *= 2;
            gameValues[i][j] = 0;
          } else {
            continue;
          }
        }
      } else if (i === 2) {
        if (gameValues[i][j] === 0) {
          continue;
        } else {
          if (gameValues[i - 1][j] === 0) {
            if (gameValues[i - 2][j] === 0) {
              gameValues[i - 2][j] = gameValues[i][j];
              gameValues[i][j] = 0;
            } else if (gameValues[i - 2][j] === gameValues[i][j]) {
              gameValues[i - 2][j] *= 2;
              gameValues[i][j] = 0;
            } else {
              gameValues[i - 1][j] = gameValues[i][j];
              gameValues[i][j] = 0;
            }
          } else if (gameValues[i - 1][j] === gameValues[i][j]) {
            gameValues[i - 1][j] *= 2;
            gameValues[i][j] = 0;
          }
        }
      } else if (i === 3) {
        if (gameValues[i][j] === 0) {
          continue;
        } else {
          if (gameValues[i - 1][j] === 0) {
            if (gameValues[i - 2][j] === 0) {
              if (gameValues[i - 3][j] === 0) {
                gameValues[i - 3][j] = gameValues[i][j];
                gameValues[i][j] = 0;
              } else if (gameValues[i - 3][j] === gameValues[i][j]) {
                gameValues[i - 3][j] *= 2;
                gameValues[i][j] = 0;
              } else {
                gameValues[i - 2][j] = gameValues[i][j];
                gameValues[i][j] = 0;
              }
            } else if (gameValues[i - 2][j] === gameValues[i][j]) {
              gameValues[i - 2][j] *= 2;
              gameValues[i][j] = 0;
            } else {
              gameValues[i - 1][j] = gameValues[i][j];
              gameValues[i][j] = 0;
            }
          } else if (gameValues[i - 1][j] === gameValues[i][j]) {
            gameValues[i - 1][j] *= 2;
            gameValues[i][j] = 0;
          }
        }
      }
    }
  }
}

function shiftNumbersDown(gameValues) {
  // Shift every tile as far down as they can go
  // We'll start with row 2 because row 3 can't move down at row 3
  for (let i = 2; i >= 0; i--) {
    for (j = 0; j < gameValues[i].length; j++) {
      if (i === 2) {
        if (gameValues[i][j] === 0) {
          continue;
        } else {
          if (gameValues[i + 1][j] === 0) {
            gameValues[i + 1][j] = gameValues[i][j];
            gameValues[i][j] = 0;
          } else if (gameValues[i + 1][j] === gameValues[i][j]) {
            gameValues[i + 1][j] *= 2;
            gameValues[i][j] = 0;
          } else {
            continue;
          }
        }
      } else if (i === 1) {
        if (gameValues[i][j] === 0) {
          continue;
        } else {
          if (gameValues[i + 1][j] === 0) {
            if (gameValues[i + 2][j] === 0) {
              gameValues[i + 2][j] = gameValues[i][j];
              gameValues[i][j] = 0;
            } else if (gameValues[i + 2][j] === gameValues[i][j]) {
              gameValues[i + 2][j] *= 2;
              gameValues[i][j] = 0;
            } else {
              gameValues[i + 1][j] = gameValues[i][j];
              gameValues[i][j] = 0;
            }
          } else if (gameValues[i + 1][j] === gameValues[i][j]) {
            gameValues[i + 1][j] *= 2;
            gameValues[i][j] = 0;
          }
        }
      } else if (i === 0) {
        if (gameValues[i][j] === 0) {
          continue;
        } else {
          if (gameValues[i + 1][j] === 0) {
            if (gameValues[i + 2][j] === 0) {
              if (gameValues[i + 3][j] === 0) {
                gameValues[i + 3][j] = gameValues[i][j];
                gameValues[i][j] = 0;
              } else if (gameValues[i + 3][j] === gameValues[i][j]) {
                gameValues[i + 3][j] *= 2;
                gameValues[i][j] = 0;
              } else {
                gameValues[i + 2][j] = gameValues[i][j];
                gameValues[i][j] = 0;
              }
            } else if (gameValues[i + 2][j] === gameValues[i][j]) {
              gameValues[i + 2][j] *= 2;
              gameValues[i][j] = 0;
            } else {
              gameValues[i + 1][j] = gameValues[i][j];
              gameValues[i][j] = 0;
            }
          } else if (gameValues[i + 1][j] === gameValues[i][j]) {
            gameValues[i + 1][j] *= 2;
            gameValues[i][j] = 0;
          }
        }
      }
    }
  }
}

function shiftNumbersRight(gameValues) {
  // Shift every tile as right down as they can go

  for (let eachRow of gameValues) {
    // We start at index 2 because can't shift index 3 any more right
    for (let i = 2; i >= 0; i--) {
      if (i === 2) {
        if (eachRow[i] === 0) {
          continue;
        } else {
          if (eachRow[i + 1] === 0) {
            eachRow[i + 1] = eachRow[i];
            eachRow[i] = 0;
          } else if (eachRow[i + 1] === eachRow[i]) {
            eachRow[i + 1] *= 2;
            eachRow[i] = 0;
          } else {
            continue;
          }
        }
      } else if (i === 1) {
        if (eachRow[i] === 0) {
          continue;
        } else {
          if (eachRow[i + 1] === 0) {
            if (eachRow[i + 2] === 0) {
              eachRow[i + 2] = eachRow[i];
              eachRow[i] = 0;
            } else if (eachRow[i + 2] === eachRow[i]) {
              eachRow[i + 2] *= 2;
              eachRow[i] = 0;
            } else {
              eachRow[i + 1] = eachRow[i];
              eachRow[i] = 0;
            }
          } else if (eachRow[i + 1] === eachRow[i]) {
            eachRow[i + 1] *= 2;
            eachRow[i] = 0;
          }
        }
      } else if (i === 0) {
        if (eachRow[i] === 0) {
          continue;
        } else {
          if (eachRow[i + 1] === 0) {
            if (eachRow[i + 2] === 0) {
              if (eachRow[i + 3] === 0) {
                eachRow[i + 3] = eachRow[i];
                eachRow[i] = 0;
              } else if (eachRow[i + 3] === eachRow[i]) {
                eachRow[i + 3] *= 2;
                eachRow[i] = 0;
              } else {
                eachRow[i + 2] = eachRow[i];
                eachRow[i] = 0;
              }
            } else if (eachRow[i + 2] === eachRow[i]) {
              eachRow[i + 2] *= 2;
              eachRow[i] = 0;
            } else {
              eachRow[i + 1] = eachRow[i];
              eachRow[i] = 0;
            }
          } else if (eachRow[i + 1] === eachRow[i]) {
            eachRow[i + 1] *= 2;
            eachRow[i] = 0;
          }
        }
      }
    }
  }
}

function shiftNumbersLeft(gameValues) {
  // Shift every tile as far left as they can go

  for (let eachRow of gameValues) {
    // We start at index 2 because can't shift index 3 any more right
    for (let i = 1; i < eachRow.length; i++) {
      if (i === 1) {
        if (eachRow[i] === 0) {
          continue;
        } else {
          if (eachRow[i - 1] === 0) {
            eachRow[i - 1] = eachRow[i];
            eachRow[i] = 0;
          } else if (eachRow[i - 1] === eachRow[i]) {
            eachRow[i - 1] *= 2;
            eachRow[i] = 0;
          } else {
            continue;
          }
        }
      } else if (i === 2) {
        if (eachRow[i] === 0) {
          continue;
        } else {
          if (eachRow[i - 1] === 0) {
            if (eachRow[i - 2] === 0) {
              eachRow[i - 2] = eachRow[i];
              eachRow[i] = 0;
            } else if (eachRow[i - 2] === eachRow[i]) {
              eachRow[i - 2] *= 2;
              eachRow[i] = 0;
            } else {
              eachRow[i - 1] = eachRow[i];
              eachRow[i] = 0;
            }
          } else if (eachRow[i - 1] === eachRow[i]) {
            eachRow[i - 1] *= 2;
            eachRow[i] = 0;
          }
        }
      } else if (i === 3) {
        if (eachRow[i] === 0) {
          continue;
        } else {
          if (eachRow[i - 1] === 0) {
            if (eachRow[i - 2] === 0) {
              if (eachRow[i - 3] === 0) {
                eachRow[i - 3] = eachRow[i];
                eachRow[i] = 0;
              } else if (eachRow[i - 3] === eachRow[i]) {
                eachRow[i - 3] *= 2;
                eachRow[i] = 0;
              } else {
                eachRow[i - 2] = eachRow[i];
                eachRow[i] = 0;
              }
            } else if (eachRow[i - 2] === eachRow[i]) {
              eachRow[i - 2] *= 2;
              eachRow[i] = 0;
            } else {
              eachRow[i - 1] = eachRow[i];
              eachRow[i] = 0;
            }
          } else if (eachRow[i - 1] === eachRow[i]) {
            eachRow[i - 1] *= 2;
            eachRow[i] = 0;
          }
        }
      }
    }
  }
}

function checkBoardFull(gameValues) {
  // check to see if board is full, which means no random tiles can be generated
  for (eachRow of gameValues) {
    if (eachRow.includes(0)) {
      return false;
    }
  }
  return true;
}

function checkHorizontalMovement(gameValues) {
  // Check to see if tiles can move left or right
  for (eachRow of gameValues) {
    for (let i = 0; i < eachRow.length - 1; i++) {
      if (
        eachRow[i] === eachRow[i + 1] ||
        eachRow[i] === 0 ||
        eachRow[i + 1] === 0
      ) {
        return true;
      }
    }
  }
  return false;
}

function checkVerticalMovement(gameValues) {
  // Check to see if tiles can move up or down

  for (let i = 0; i < gameValues.length - 1; i++) {
    for (j = 0; j < gameValues[i].length; j++) {
      if (
        gameValues[i][j] === gameValues[i + 1][j] ||
        gameValues[i][j] === 0 ||
        gameValues[i + 1][j] === 0
      ) {
        return true;
      }
    }
  }
  return false;
}

function checkBest(gameValues, bestValue) {
  // Compares best value on the scoreboard with the largest number on the gameboard
  for (eachRow of gameValues) {
    for (let i = 0; i < gameValues.length; i++) {
      if (eachRow[i] > bestValue) {
        bestValue = eachRow[i];
      }
    }
  }
  return bestValue;
}

function newRandomTile(gameValues) {
  // create random tiles with a value of 2 on the gameboard
  // REMEMBER to have a break if there is no empty tile
  if (checkBoardFull(gameValues)) {
    // We will not creae a randomTile
    return;
  }
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

newGameBtn.addEventListener("click", function () {
  // Wipes board and initializes game. Also reverts game result message
  gameRun = true;
  gameResult.innerHTML = "Status: Playing Game";
  gameResult.style.backgroundColor = "blanchedalmond";

  gameValues.length = 0;
  for (let i = 0; i < 4; i++) {
    gameValues.push([0, 0, 0, 0]);
  }
  newRandomTile(gameValues);
  newRandomTile(gameValues);
  updateGameDisplay(gameDisplay, gameValues);
});

function checkLoser(gameValues) {
  // Checks to see if there is no way to move any tiles, which means the
  // player has lost
  if (
    !checkHorizontalMovement(gameValues) &&
    !checkVerticalMovement(gameValues)
  ) {
    return true;
  }
  return false;
}

// Main Game Flag
let gameRun = true;

// INITIALIZE THE BOARD
// We'll start by picking 2 random numbers between 0 and 15 (for the tiles
// on the board) and then setting them equal to 2.
newRandomTile(gameValues);
newRandomTile(gameValues);
updateGameDisplay(gameDisplay, gameValues);

// Can also use document.onkeydown
addEventListener("keydown", function (e) {
  // keyCode is technically depracated (“inconsistent across platforms and even the same implementation on different operating systems or using different localizations.” according to a medium article)

  // window.event fallback used just in case somehow, someone is running my game in an earlier
  // version of Internet Explorer that doesn't pass in the window event.
  e = e || window.event;
  key = e.key || e.keyCode;
  if (gameRun) {
    if (key === 38 || key === "ArrowUp") {
      // up arrow press
      shiftNumbersUp(gameValues);
      newRandomTile(gameValues);
      updateGameDisplay(gameDisplay, gameValues);
    } else if (key === 40 || key === "ArrowDown") {
      // down arrow press
      shiftNumbersDown(gameValues);
      newRandomTile(gameValues);
      updateGameDisplay(gameDisplay, gameValues);
    } else if (key === 37 || key === "ArrowLeft") {
      // left arrow press
      shiftNumbersLeft(gameValues);
      newRandomTile(gameValues);
      updateGameDisplay(gameDisplay, gameValues);
    } else if (key === 39 || key === "ArrowRight") {
      // right arrow press
      shiftNumbersRight(gameValues);
      newRandomTile(gameValues);
      updateGameDisplay(gameDisplay, gameValues);
    }

    bestValue = checkBest(gameValues, bestValue);
    bestDisplay.innerText = `Best: ${bestValue}`;

    // Check for a loser (if board is full and no way you can move)
    if (checkLoser(gameValues)) {
      gameResult.innerText = `YOU HAVE LOST! The board is full with no possible movements`;
      gameResult.style.backgroundColor = "rgb(241, 151, 166)";
      gameRun = false;
    }
    // Check for a winner (if they reached 2048)
    for (eachRow of gameValues) {
      for (value of eachRow) {
        if (value === 2048) {
          gameResult.innerText = `WINNER! Congrats! You reached ${value}!!`;
          gameResult.style.backgroundColor = "green";
          gameRun = false;
        }
      }
    }
  }
});
