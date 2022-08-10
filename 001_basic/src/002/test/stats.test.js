const stats = require('../stats');

describe('stats function', () => {
  const array = [1, 2, 3, 4, 5];

  it('get maximum value in the Array', () => {
    expect(stats.max(array)).toBe(5);
  });

  it('get minmum value in the Array', () => {
    expect(stats.min(array)).toBe(1);
  });

  it('average of Array', () => {
    expect(stats.avg(array)).toBe(3);
  });

  it('median of Array', () => {
    expect(stats.median(array)).toBe(3);
  });

  describe('mode function', () => {
    it('has no mode', () => {
      expect(stats.mode(array)).toBe(null);
    });

    it('has one mode', () => {
      expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
    });

    it('has many mode', () => {
      expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });
  });
});
