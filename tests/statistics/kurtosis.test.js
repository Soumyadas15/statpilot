const kurtosis = require('../../src/statistics/kurtosis');

describe("kurtosis", () => {
    it("should calculate the kurtosis correctly for a normal distribution", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = -0.6;
      const result = kurtosis(arr);
      expect(result).toBe(expected);
    });
    
    it("should calculate the kurtosis correctly for a distribution with positive excess kurtosis", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      const expected = 2.4375;
      const result = kurtosis(arr);
      expect(result).toBe(expected);
    });
    
    it("should calculate the kurtosis correctly for a distribution with negative excess kurtosis", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      const expected = -1.3571428571428572;
      const result = kurtosis(arr);
      expect(result).toBe(expected);
    });
  });