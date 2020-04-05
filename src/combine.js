import { columns, identity } from './utils';

// the algorithm to combine an array of numbers according to the rules of the game:
// essentially move all zeroes to the beginning of the array and combine adjacent equal numbers
export const combineArr = (arr, reverse) => {
  let changed;
  let hasFoundNonZero;
  const operateOn = arr.slice();

  reverse && operateOn.reverse();

  const next = operateOn.reduce((acc, val, idx, arr) => {
    hasFoundNonZero = hasFoundNonZero || !!val;
    const nextNonZero = arr.slice(idx + 1).findIndex(v => !!v) + (idx + 1);
    if (nextNonZero !== idx && val === arr[nextNonZero]) {
      changed = true;
      arr[nextNonZero] = 0;
      val *= 2;
    }

    if (!changed) changed = hasFoundNonZero && !val;
    acc[idx] = val;
    return acc;
  }, []);

  if (!changed) return arr;

  // fill in the modified array with ending zeroes
  // remove all zeroes and add them at the beginning
  const out = Array(arr.length)
    .fill(0)
    .concat(next.filter(v => !!v))
    .slice(-arr.length);
  reverse && out.reverse();
  return out;
};

// direction -1 for vertical, 1 for horizontal
// which = 1 for down/right, -1 for up/left
export default (board, direction, which) => {
  let changed;

  const fn = direction === -1 ? columns : identity;

  const nextBoard = fn(
    fn(board).map(arr => {
      const next = combineArr(arr, which === -1, board.length);
      changed = changed || arr !== next;
      return next;
    })
  );

  return changed ? nextBoard : board;
};
