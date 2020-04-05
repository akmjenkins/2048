import createBoard from '../src/createBoard';

describe('createBoard', () => {
  it('should create a board', () => {
    const board = createBoard();
    expect(board).toHaveLength(4);
    board.forEach(r => expect(r).toHaveLength(4));
  });

  it('should create a board of a given size', () => {
    [2, 10, 20].forEach(num => {
      const board = createBoard(num);
      expect(board).toHaveLength(num);
      board.forEach(r => expect(r).toHaveLength(num));
    });
  });
});
