function multiply(a, b) 
{
  const rowsA = a.length;
  const rowsB = b.length;
  const colsA = a[0].length;
  const colsB = b[0].length;

  if (colsA !== rowsB) {
    throw new Error('Matrices cannot be multiplied');
  }

  const result = new Array(rowsA);
  for (let i = 0; i < rowsA; i++) {
    result[i] = new Float64Array(colsB);
  }

  for (let j = 0; j < colsB; j++) {
    const colB = b.map(row => row[j]);
    for (let i = 0; i < rowsA; i++) {
      const rowA = a[i];
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += rowA[k] * colB[k];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

module.exports = multiply;
