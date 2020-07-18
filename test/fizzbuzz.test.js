const {fizzbuzz} = require('../src/fizzbuzz');

describe("fizzbuzz", () => {
    it("replaces multiples of 3 with 'fizz'", () => {
        expect(fizzbuzz(3)).toBe('fizz');
    })
})