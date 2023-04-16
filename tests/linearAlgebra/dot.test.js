const dot = require('../../src/linearAlgebra/dot.js')

describe('dot', () => {
    it('should return the dot product of two matrices', () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        const result = dot(a, b);
        expect(result).toBe(32);
    });

    it('Handles large datasets', () => {
        const n = 10000000;
        const a = new Array(n).fill(1);
        const b = new Array(n).fill(2);
        const result = dot(a, b);
        expect(result).toBe(n * 2);
    });
})