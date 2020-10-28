const add = require('../add.js');

describe('add', () => {
    it('should return the sum of two numbers', () => {
        let actual = add(1,1);
        let expected = 2;
        expect(actual).toBe(expected);
    })
})