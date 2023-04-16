const median = require('../../src/statistics/median')

describe('median', () => {
    it('should return the median of a given dataset of even length', () => {
        const data = [5,2,3,1,6,4];
        expect(median(data)).toBeCloseTo(3,3)
    });

    it('should return the median of a given dataset of odd length', () => {
        expect(median([1,3,5,7,8])).toBe(5)
    });

    it('should return the median of a single length dataset', () => {
        expect(median([10])).toBe(10);
    });
    
});