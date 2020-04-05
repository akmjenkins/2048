import { columns } from '../src/utils';

describe('columns', () => {
  it('should work', () => {
    const sample = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ];

    const expected = [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4, 4],
    ];

    expect(columns(sample)).toEqual(expected);
  });
});
