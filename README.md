## 2048

[![Coverage Status](https://coveralls.io/repos/github/akmjenkins/2048/badge.svg)](https://coveralls.io/github/akmjenkins/2048)
[![Build Status](https://travis-ci.com/akmjenkins/2048.svg)](https://travis-ci.com/akmjenkins/2048)


A functional implementation of the [2048](https://play2048.co/).

By default this implementation follows 2048 exactly - a 4x4 board is created with a 2 or 4 entered in two randomly chosen blocks. Moves can then be performed on a board using [move](#move).

## Why?

For fun.

## API

### createBoard
```js
createBoard(boardSize?: number = 4, startWith?: number = 2): Board`
```

Creates a 2048 game board (square) of the optionally given size with the optionally
given number of squares

### move
```js
move(board: Board, direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT', numbers?: number[] = [2,4]): Board`
```

Performs a move on the given board and returns a the next board. Optionally accepts which new numbers could be generated into an empty square. 

Throws a game over error if no new moves remain.