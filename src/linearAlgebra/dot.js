function dot(mat1, mat2) 
{
    if (mat1.length !== mat2.length) 
    {
            return null;
    }

    let res = mat1.reduce((acc, val, idx) => acc + val * mat2[idx], 0);

    return res;
}

module.exports = dot;