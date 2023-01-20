const counterFunction = require('./counterLettersOfNums');
const buildName = require('./buildName');

describe('test auxiliar function',()=>{
    const oneTest = [
        {'exp':'one','val':1},
        {'exp':'teen','val':10},
        {'exp':'twelve','val':12},
        {'exp':'nintynine', 'val':99},
        {'exp':'twohundred', 'val':200},
        {'exp':'twohundredtwenty', 'val':220},
        {'exp':'threehundredtwo', 'val':302},
        {'exp':'threehundredeleven', 'val':311},
        {'exp':'ninehundrednintynine', 'val':999},
        {'exp':'onethousand', 'val':1000}
    ]

    oneTest.map(params=>{
        test('should return names of numbers', ()=>{
            expect(params['exp']).toBe(buildName(params['val']));
        });
    });
});

describe('test main function', ()=>{
    test('should return error about type', ()=>{
        const exp = 'Error : the input must be a number';
        const res = counterFunction('no number type');
        expect(exp).toBe(res);
    });
    test('should return error about size of number', ()=>{
        const exp = 'Error : input must be greater than zero and less or equal to one thousand';
        const res = counterFunction(-1);
        expect(exp).toBe(res);
    });
    test('should return error about size of number', ()=>{
        const exp = 'Error : input must be greater than zero and less or equal to one thousand';
        const res = counterFunction(1001);
        expect(exp).toBe(res);
    });
    test('must return the sum of all lenght name of natural numbers',()=>{
        const exp = 3;
        const res = counterFunction(1);
        expect(exp).toBe(res);
    });
    test('must return the sum of all lenght name of natural numbers',()=>{
        const exp = 36;
        const res = counterFunction(9);
        expect(exp).toBe(res);
    });
});