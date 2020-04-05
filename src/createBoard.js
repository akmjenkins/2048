import { generate } from './utils';

export default (boardSize = 4, startWith = 2) =>
  Array(startWith || 1) // can't start a board with less than 1 square filled
    .fill(0)
    .reduce(
      acc => generate(acc),
      Array(boardSize).fill(Array(boardSize).fill(0))
    );
