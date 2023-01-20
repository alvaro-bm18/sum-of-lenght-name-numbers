const buildName = require("./buildName");

function countLettersOfOneTo(number) {
    if(typeof number !== 'number'){
        return 'Error : the input must be a number';
    }

    if(number > 1000 || number <= 0){
        return 'Error : input must be greater than zero and less or equal to one thousand';
    }

    let sum = 0;
    for(let n = 1; n <= number; n++){
        let numberName = buildName(n);
        sum += numberName.length;
        console.log(n, numberName);
    }

    return sum;
}
module.exports = countLettersOfOneTo;