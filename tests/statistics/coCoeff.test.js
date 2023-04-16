const coCoeff = require('../../src/statistics/coCoeff');

describe('coCoeff', () => {
    it('calculates the correlation coefficient of two arrays', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [2, 4, 6, 8, 10];
        const expected = 0.9999999999999998;
        const result = coCoeff(arr1, arr2);
        expect(result).toBe(expected);
    });

    it('calculates the correlation coefficient of two arrays', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [2, 4, 6, 6, 10];
        const expected = 0.9594032236002469;
        const result = coCoeff(arr1, arr2);
        expect(result).toBe(expected);
    });

    it('calculates the correlation coefficient of two arrays', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [2, 4, 6, 8];
        const expected = 0.9999999999999998;
        const result = coCoeff(arr1, arr2);
        expect(result).toBe(expected);
    });
});