const stdDev = require('../../src/statistics/stdDev')

describe('standardDeviation', () => {
    it('', () => {
        const data = [1,2,3,4,5];
        expect(stdDev(data)).toBeCloseTo(1.41421,5)
    });
});