# 2048-game

## About the Game

This is a fun game where you slide tiles up, down, left, or right in order to combine matching tiles. There is no set winner, as the objective of the game is just to reach the highest score until the entire board is filled up with tiles and you cannot slide any direction (you can only slide if there are empty spaces or there are the same tiles next to each that can combine into 1). For the sake of a "win" clause, we set the max score you can get to be 2048.
- Fun Fact: The creator of 2048, Gabriele Cirulli, made the game just as a casual project he finished in a few days.


## MVP Wireframes

![Screen Shot 2022-04-13 at 8 12 10 AM](https://user-images.githubusercontent.com/68241119/163177706-19a31eff-1fda-4028-8099-b621c1b23dfc.png)

![Screen Shot 2022-04-13 at 8 12 39 AM](https://user-images.githubusercontent.com/68241119/163177751-b9fb3afa-f8d5-4e18-bea0-4d7cd3debf7a.png)

![Screen Shot 2022-04-13 at 8 14 07 AM](https://user-images.githubusercontent.com/68241119/163177786-0c2567b4-2e76-4436-87b1-6def82df0167.png)

## User Experience

The game will start off with a 4x4 grid game board of tiles (16 tiles in total), with 2 tiles of value 2 being randomly placed on the board. The game will be ready to go once you open the link.

- user will be able to press the up, down, left, or right arrow key on their keyboards to slide the tiles the most they can to that direction (either to the end of the board, or to the nearest possible space). 

- sliding in any direction will cause a new tile of value 2 to appear randomly on the board.

- if the board is filled and nothing happens, that means the game is still playable and you can slide in a certain direction to combine like-tiles.

- if the board is filled with tiles and it is impossible to slide, then you have lost the game and your score gets saved into the 'best score' box on the top.

- at any point, even after the game ends, you have an option to hit the new game button to get a fresh new board.

## MVP Goals

- as a user, I want to be able to press any arrow key and have tiles move in that direction

- as a user, I want to be able to start a new game whenever I want

- as a user, I want my best score to be saved, even if I start a new game before I lose

- as a user, I want the game to not register any moves after I lose
