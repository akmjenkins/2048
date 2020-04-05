import combine from './combine';
import { generate, hasMove } from './utils';

const MAP = {
  UP: [-1, -1],
  DOWN: [-1, 1],
  LEFT: [1, -1],
  RIGHT: [1, 1],
};

// generate parameter is for testing purposes
export default (board, how, numbers) => {
  if (!Object.keys(MAP).includes(how))
    throw new Error(
      `how must be one of ${Object.keys(MAP).join(', ')}; '${how}' given`
    );
  let next = combine(board, ...MAP[how]);
  if (next !== board) {
    next = generate(next, numbers);
    if (!hasMove(next)) throw new Error(`Game over`);
  }
  return next;
};
