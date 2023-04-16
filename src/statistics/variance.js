function variance(arr)
{
    const n = arr.length;

    if (n < 1)
    {
        throw new Error ("Array must have at least one valid element");
    }

    let mean = 0;
    let sum = 0;
    let squares = [];
    let squareSum = 0;

    for (let i = 0; i<arr.length; ++i)
    {
        sum += arr[i];
    }
    mean = sum / n;

    for (let i = 0; i<arr.length; ++i)
    {
        let temp = arr[i] - mean;
        squares.push(temp * temp);
    }

    for (let i = 0; i<squares.length; ++i)
    {
        squareSum += squares[i];
    }

    return squareSum / squares.length;

}

module.exports = variance;