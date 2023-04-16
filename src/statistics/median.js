function median(arr)
{

    const newArr = arr.sort((a ,b) => b-a);
    const mid = Math.floor(newArr.length / 2);

    if (newArr.length / 2 === 0)
    {
        return (newArr[mid - 1] + newArr[mid]) / 2;
    }
    else
    {
        return newArr[mid];
    }
}

module.exports = median;