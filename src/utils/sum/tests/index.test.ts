// file: src/utils/sum/test/index.ts

import { sum } from '..';
describe('Calculator tests', () => {
  it('should return sum correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return sum correctly with negative number', () => {
    expect(sum(-2, 3)).toBe(1);
  });
});
