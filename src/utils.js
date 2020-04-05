export const identity = a => a;

export const random = num => Math.floor(Math.random() * num);

export const randomNumber = numbers => numbers[random(numbers.length)];

const iterate = (cb, boardSize) => {
  const start = random(boardSize);
  for (let i = 0; i < boardSize; i++) {
    const idx = (start + i) % boardSize;
    if (cb(idx)) return idx;
  }

  throw new Error('not found');
};

const hasZero = board => board.some(row => row.includes(0));

// determine if zeroes exist or adjacent matching numbers exist either vertically or horizontally
const hasAdjacent = arr =>
  arr.filter(v => !!v).some((val, idx) => val === arr[idx + 1]);

export const hasMove = board =>
  hasZero(board) || board.some(hasAdjacent) || columns(board).some(hasAdjacent);

// rotates a square so that rows become columns
export const columns = square =>
  square.map((row, rowIdx) => row.map((_, colIdx) => square[colIdx][rowIdx]));

export const randomPosition = board => {
  try {
    const row = iterate(idx => board[idx].includes(0), board.length);
    const col = iterate(idx => board[row][idx] === 0, board.length);
    return [row, col];
  } catch (e) {
    throw new Error('No empty position found');
  }
};

export const generate = (board, numbers = [2, 4]) => {
  const [row, col] = randomPosition(board);
  const next = [...board];
  const r = [...next[row]];
  r[col] = randomNumber(numbers);
  next[row] = r;
  return next;
};
