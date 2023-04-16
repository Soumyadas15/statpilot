function kurtosis(arr) {
    const n = arr.length;
    const mean = arr.reduce((acc, val) => acc + val, 0) / n;
    const variance = arr.reduce((acc, val) => acc + (val - mean) ** 2, 0) / n;
    const standardDeviation = Math.sqrt(variance);
    
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += ((arr[i] - mean) / standardDeviation) ** 4;
    }
    
    const kurt = sum / n;
    return kurt - 3;
}
  

module.exports = kurtosis;