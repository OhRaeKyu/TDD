function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

module.exports.sum = sum;
module.exports.sumOf = sumOf;
