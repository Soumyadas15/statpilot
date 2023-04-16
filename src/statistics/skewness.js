const stdDev = require("./stdDev");
const mean = require("./mean");

function skewness(arr) 
{
    const n = arr.length;
    const meanArr = mean(arr);
    const sd = stdDev(arr);
    let sum = 0;

    for(let i = 0; i<n; ++i)
    {
        sum = Math.pow(arr[i] - meanArr, 3);
    }
    const res = sum / (n) * Math.pow(sd, 4);

    return res;
}

module.exports = skewness;