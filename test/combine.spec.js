import { combineArr } from '../src/combine';

describe('combineArr', () => {
  it('should work', () => {
    [
      [[0, 0], [0, 0], 0],

      [[0, 2], [0, 2], 0],

      [[2, 0], [0, 2], 0],

      [[2, 2], [0, 4], 4],

      [[2, 0, 2], [0, 0, 4], 4],

      [[4, 2, 4], [4, 2, 4], 0],

      [[0, 4, 0, 4], [0, 0, 0, 8], 8],

      [[4, 2, 2], [0, 4, 4], 4],

      [[0, 16, 16, 8], [0, 0, 32, 8], 32],

      [[16, 32, 32, 16], [0, 16, 64, 16], 64],

      [
        [2, 4, 0, 0, 0, 16, 16, 8, 8, 0],
        [0, 0, 0, 0, 0, 0, 2, 4, 32, 16],
        16 + 32,
      ],
    ].forEach(([test, expected, points]) => {
      const next = combineArr(test);
      expect(next.arr).toEqual(expected);
      expect(next.points).toBe(points);
    });
  });

  it('should work in reverse', () => {
    const arr = [4, 4, 8, 4];
    const expected = [8, 8, 4, 0];
    const next = combineArr(arr, true);
    expect(next.arr).toEqual(expected);
    expect(next.points).toBe(8);
  });

  it('should result in non-changed', () => {
    const arr1 = [0, 2, 4, 8];
    const next1 = combineArr(arr1);
    expect(next1.arr).toBe(arr1);
    expect(next1.points).toBe(0);

    const arr2 = [2, 0, 16, 8];
    const next2 = combineArr(arr2);
    expect(next2.arr).not.toBe(arr2);
    expect(next2.points).toBe(0);
  });
});
