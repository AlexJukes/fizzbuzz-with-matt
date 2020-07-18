const {fizzbuzz} = require('../src/fizzbuzz');

describe("fizzbuzz", () => {
    it("replaces multiples of 3 with 'fizz'", () => {
        expect(fizzbuzz(3)).toBe('fizz');
        expect(fizzbuzz(6)).toBe('fizz');
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(12)).toBe('fizz');
    })
    it("replaces multiples of 5 with 'buzz'", () => {
      expect(fizzbuzz(5)).toBe('buzz')
      expect(fizzbuzz(10)).toBe('buzz')
    })
})