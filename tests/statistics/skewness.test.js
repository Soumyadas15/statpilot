const skewness = require('../../src/statistics/skewness');


describe('calculateSkewness', () => {
  it('should calculate the skewness of a normal distribution', () => {
    const arr = [0.3, -1.2, 1.1, -0.5, 0.8, -0.2, 1.4, -0.7, 0.9, -1.3];
    const skew = skewness(arr);
    expect(skew).toBeCloseTo(0, 5);
  });

  it('should calculate the skewness of a normal distribution', () => {
    const arr = [2.5, 3.7, 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2];
    const skew = skewness(arr);
    expect(skew).toBe(0.777001);
  });

  it('should calculate the skewness of a positively skewed distribution', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const skew = skewness(arr);
    expect(skew).toBeGreaterThan(0);
  });

  it('should calculate the skewness of a negatively skewed distribution', () => {
    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const skew = skewness(arr);
    expect(skew).toBeLessThan(0);
  });
});