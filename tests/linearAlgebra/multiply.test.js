const multiply = require('../../src/linearAlgebra/multiply.js')

describe('multiple', () => {
    it('Should be able to multiply two matrices', () => {
        const a = [[1, 2], [3, 4]];
        const b = [[5, 6], [7, 8]];
        const result = multiply(a, b);
        expect(result).toEqual([new Float64Array([19, 22]), new Float64Array([43, 50])]);
    });
    
})

