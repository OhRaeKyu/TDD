const { sum, sumOf } = require('../sum');

describe('sum functions', () => {
  it('sum of a, b', () => {
    const a = Math.floor(Math.random());
    const b = Math.floor(Math.random());
    const c = a + b;

    expect(sum(a, b)).toBe(c);
  });

  it('sum of array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
