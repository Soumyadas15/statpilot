const variance = require('../../src/statistics/variance')

describe('variance', () => {
    it('', () => {
        const data = [1,2,3,4,5];
        expect(variance(data)).toBe(2)
    });
});