//=================== Statistics =======================//

const mean = require('./src/statistics/mean');
const median = require('./src/statistics/median');
const stdDev = require('./src/statistics/stdDev');
const variance = require('./src/statistics/variance');
const coCoeff = require('./src/statistics/coCoeff');
const skew = require('../../src/statistics/skewness');

//=================== Linear Algebra =======================//

const dot = require('./src/linearAlgebra/dot');
const multiply = require('./src/linearAlgebra/multiply');
const transpose = require('./src/linearAlgebra/transpose');

module.exports = {

    // Statistics functions
    mean,
    median,
    stdDev,
    variance,
    coCoeff,
    skewness,

    // Linear Algebric function
    dot,
    multiply,
    transpose,
};