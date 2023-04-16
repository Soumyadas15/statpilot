const transpose = require('../../src/linearAlgebra/transpose.js')

describe('transpose', () => {
    it('transposes a square matrix', () => {
      const matrix = [[1, 2, 3], [4, 5, 6],[ 7, 8, 9]];
      const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
      expect(transpose(matrix)).toEqual(expected);
    });
  
    it('transposes a rectangular matrix', () => {
      const matrix = [[1, 2], [3, 4], [5, 6]];
      const expected = [[1, 3, 5], [2, 4, 6]];
      expect(transpose(matrix)).toEqual(expected);
    });
});