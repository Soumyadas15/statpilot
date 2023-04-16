function stdDev(arr)
{
    const n = arr.length;

    if(n < 0)
    {
        throw new Error("Array must have atleast one valid element");
    }
    const mean = arr.reduce((a,b) => a + b) / n;
    return Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a,b) => a + b) / n);
}

module.exports = stdDev;