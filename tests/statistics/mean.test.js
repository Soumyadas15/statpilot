const mean = require('../../src/statistics/mean.js')

describe('mean', () => {
    it('should return the mean of a given dataset', () => {
        expect(mean([1,2,3,4,5])).toBe(3);
    });
    
    it('should return the mean of a given dataset 2', () => {
        expect(mean([2,2,2,2,2])).toBe(2);
    });
});