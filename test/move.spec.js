import move from '../src/move';
import { generate } from '../src/utils';
jest.mock('../src/utils', () => ({
  __esModule: true,
  // mock the generate function in here so we can easily
  // make assertions about what we're doing
  ...jest.requireActual('../src/utils'),
  generate: jest.fn(a => a),
}));

const fixture = [
  [0, 0, 0, 2],
  [0, 0, 0, 2],
  [4, 0, 0, 2],
  [4, 4, 2, 2],
];

describe('move', () => {
  it('should move up', () => {
    const { board, points } = move(fixture, 'UP');
    expect(board).toEqual([
      [8, 4, 2, 4],
      [0, 0, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(points).toBe(8 + 4 + 4);
  });

  it('should move down', () => {
    const { board, points } = move(fixture, 'DOWN');
    expect(board).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 4],
      [8, 4, 2, 4],
    ]);
    expect(points).toBe(8 + 4 + 4);
  });

  it('should move left', () => {
    const { board, points } = move(fixture, 'LEFT');
    expect(board).toEqual([
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 2, 0, 0],
      [8, 4, 0, 0],
    ]);
    expect(points).toBe(8 + 4);
  });

  it('should move right', () => {
    const { board, points } = move(fixture, 'RIGHT');
    expect(board).toEqual([
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 4, 2],
      [0, 0, 8, 4],
    ]);
    expect(points).toBe(8 + 4);
  });

  it('should return the same board if no move was made', () => {
    const f = [
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 0, 2],
    ];

    const { board, points } = move(f, 'RIGHT');
    expect(board).toBe(f);
    expect(points).toBe(0);
  });

  it('should throw a game over error', () => {
    // messed up test to assert we get a game over error
    generate.mockImplementationOnce(board => {
      board[0][0] = 1024;
      return board;
    });
    const f = [
      [16, 0, 64, 128],
      [128, 64, 32, 16],
      [16, 32, 64, 128],
      [128, 64, 32, 16],
    ];

    expect(() => move(f, 'RIGHT')).toThrow('Game over');
  });

  it('should throw an error if the wrong how parameter is given', () => {
    expect(() => move(fixture, 'joe')).toThrow(
      `how must be one of UP, DOWN, LEFT, RIGHT; 'joe' given`
    );
  });
});
