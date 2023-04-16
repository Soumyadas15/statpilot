const mean = require("./mean");

function coCoeff(arr1, arr2) 
{

    if(arr1.length != arr2.length)
    {
        throw new Error("Array length mismatch")
    }

    let sum1 = mean(arr1);
    let sum2 = mean(arr2);
    let sum1Sq = 0;
    let sum2Sq = 0;
    let pSum = 0;

    for (let i = 0; i < n; ++i) 
    {

        sum1Sq += arr1[i] * arr1[i];
        sum2Sq += arr2[i] * arr2[i];
        pSum += arr1[i] * arr2[i];
    }

    const numerator = pSum - (sum1 * sum2) / n;
    const denominator =
    Math.sqrt(sum1Sq - (sum1 ** 2) / n) * Math.sqrt(sum2Sq - (sum2 ** 2) / n);

    if (denominator === 0) {
        return 0;
    }

    return numerator / denominator;
}

module.exports = coCoeff;