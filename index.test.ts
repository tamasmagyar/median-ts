import { median } from './index';

describe('calculateMedian', () => {
  test('calculates median of odd length array', () => {
    expect(median([1, 3, 3, 6, 7, 8, 9])).toBe(6);
  });

  test('calculates median of even length array', () => {
    expect(median([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5);
  });

  test('handles array with one element', () => {
    expect(median([4])).toBe(4);
  });

  test('returns null for empty array', () => {
    expect(median([])).toBeNull();
  });

  test('handles unsorted array', () => {
    expect(median([9, 1, 5, 3, 4])).toBe(4);
  });
});
