import { combineArr } from '../src/combine';

describe('combineArr', () => {
  it('should work', () => {
    [
      [
        [0, 0],
        [0, 0],
      ],

      [
        [0, 2],
        [0, 2],
      ],

      [
        [2, 0],
        [0, 2],
      ],

      [
        [2, 2],
        [0, 4],
      ],

      [
        [2, 0, 2],
        [0, 0, 4],
      ],

      [
        [4, 2, 4],
        [4, 2, 4],
      ],

      [
        [0, 4, 0, 4],
        [0, 0, 0, 8],
      ],

      [
        [4, 2, 2],
        [0, 4, 4],
      ],

      [
        [0, 16, 16, 8],
        [0, 0, 32, 8],
      ],

      [
        [16, 32, 32, 16],
        [0, 16, 64, 16],
      ],

      [
        [2, 4, 0, 0, 0, 16, 16, 8, 8, 0],
        [0, 0, 0, 0, 0, 0, 2, 4, 32, 16],
      ],
    ].forEach(([test, expected]) => {
      expect(combineArr(test)).toEqual(expected);
    });
  });

  it('should work in reverse', () => {
    const arr1 = [4, 4, 8, 4];
    const expected1 = [8, 8, 4, 0];
    expect(combineArr(arr1, true)).toEqual(expected1);
  });

  it('should result in non-changed', () => {
    const arr1 = [0, 2, 4, 8];
    expect(combineArr(arr1)).toBe(arr1);

    const arr2 = [2, 0, 16, 8];
    expect(combineArr(arr2)).not.toBe(arr2);
  });
});
