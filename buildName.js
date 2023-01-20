function buildName(number) {
    const naturals = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const tens = {
        10: 'teen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninty'
    };
    const thousandSufix = 'hundred';
    const exceptions = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        1000: 'onethousand'
    };
    const buildNameTensNoModuleof10 = num => {
        let natural = num % 10;
        return tens[num - natural].concat(naturals[natural]);
    };
    const buildNameHundred = num => {
        let naturalPart = num / 100;
        return naturals[naturalPart].concat(thousandSufix);
    }
    const buildNameHundredNoModuleof100 = num => {
        let number_string = String(num);
        let hundredUnity = Number(number_string[0]) * 100;
        let tensUnity = Number(number_string.slice(1));

        if (tensUnity < 10) {
            return buildNameHundred(hundredUnity).concat(naturals[tensUnity]);
        }

        if (tensUnity % 10 === 0) {
            return buildNameHundred(hundredUnity).concat(tens[tensUnity]);
        }

        if(tensUnity >= 11 && tensUnity <= 13){
            return buildNameHundred(hundredUnity).concat(exceptions[tensUnity]);
        }

        return buildNameHundred(hundredUnity).concat(buildNameTensNoModuleof10(tensUnity));
    };

    if (number < 10) {
        return naturals[number];
    }

    if (number > 9 && number < 100) {

        if (number >= 11 && number <= 13) {
            return exceptions[number];
        }

        if (number % 10 === 0) {
            return tens[number];
        }

        else {
            return buildNameTensNoModuleof10(number);
        }
    }

    if (number > 99) {
        if (number === 1000) {
            return exceptions[number];
        }

        if (number % 100 === 0) {
            return buildNameHundred(number);
        }
        else {
            return buildNameHundredNoModuleof100(number);
        }
    }
}

module.exports = buildName;