const sum = require("./sum");  // this is how we import single file;
const sub = require("./subtract");

// const sum = require(sum);

const exp = {
    sum : sum,
    subtract : sub
}

module.exports = exp; // this is how we do maltiple exports