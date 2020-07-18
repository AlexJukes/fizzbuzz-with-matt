const fizzbuzz = (number) => {
    if (number % 5 === 0 && number % 3 === 0) {
      return "fizzbuzz";
    }
    if (number % 5 === 0) {
        return "buzz"
    }
    return "fizz";
}

module.exports = {
  fizzbuzz,
}