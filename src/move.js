import combine from './combine';
import { generate, hasMove, hasNumber } from './utils';

const MAP = {
  UP: [-1, -1],
  DOWN: [-1, 1],
  LEFT: [1, -1],
  RIGHT: [1, 1],
};

// generate parameter is for testing purposes
export default (board, how, options = {}) => {
  if (!Object.keys(MAP).includes(how))
    throw new Error(
      `how must be one of ${Object.keys(MAP).join(', ')}; '${how}' given`
    );
  const ab = MAP[how];
  const next = combine(board, ab[0], ab[1]);
  if (next.board !== board) {
    next.board = generate(next.board, options.numbers);
    if (!hasMove(next.board)) throw new Error(`Game over`);
  }
  next.won = hasNumber(options.winAt || 2048, next.board);
  return next;
};
