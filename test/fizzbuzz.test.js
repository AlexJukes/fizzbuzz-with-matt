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
    });
    it("replaces numbers that are multiples of 5 and 3 with 'fizzbuzz'", () => {
      expect(fizzbuzz(15)).toBe('fizzbuzz');
      expect(fizzbuzz(30)).toBe('fizzbuzz');
    })
    it("returns the given number if it is neither a multiple of 3 or 5", () => {
      expect(fizzbuzz(1)).toBe(1)
      expect(fizzbuzz(2)).toBe(2)
      expect(fizzbuzz(4)).toBe(4)
    })
})