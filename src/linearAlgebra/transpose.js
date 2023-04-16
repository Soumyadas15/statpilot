function transpose(matrix) 
{
    res = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));

    return res;
}
  
module.exports = transpose;