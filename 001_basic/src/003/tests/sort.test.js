const sort = require('../sort');

describe('sort function', () => {
  const currentArr = [3, 5, 2, 4, 1];
  const sortedArr = [1, 2, 3, 4, 5];

  it('selection sort algorithm', () => {
    expect(sort.selectionSort(currentArr)).toEqual(sortedArr);
  });

  it('insertion sort algorithm', () => {
    expect(sort.insertionSort(currentArr)).toEqual(sortedArr);
  });
});
