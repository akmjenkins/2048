import move from '../src/move';
import { generate, identity } from '../src/utils';
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
    expect(move(fixture, 'UP')).toEqual([
      [8, 4, 2, 4],
      [0, 0, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  it('should move down', () => {
    expect(move(fixture, 'DOWN')).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 4],
      [8, 4, 2, 4],
    ]);
  });

  it('should move left', () => {
    expect(move(fixture, 'LEFT')).toEqual([
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 2, 0, 0],
      [8, 4, 0, 0],
    ]);
  });

  it('should move right', () => {
    expect(move(fixture, 'RIGHT')).toEqual([
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 4, 2],
      [0, 0, 8, 4],
    ]);
  });

  it('should return the same board if no move was made', () => {
    const f = [
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 0, 2],
    ];

    expect(move(f, 'RIGHT')).toBe(f);
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
