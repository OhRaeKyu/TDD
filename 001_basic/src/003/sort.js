exports.selectionSort = (numbers) => {
  let result = [];
  let newArr = [...numbers];

  for (let i = 0; i < numbers.length; i++) {
    result.push(Math.min(...newArr));
    newArr.splice(newArr.indexOf(Math.min(...newArr)), 1);
  }

  return result;
};

exports.insertionSort = (numbers) => {
  const getInsertIndex = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > value) {
        return i;
      }
    }
    return arr.length;
  };

  let result = [];
  let newArr = [...numbers];

  for (let i = 0; i < numbers.length; i++) {
    result.splice(getInsertIndex(result, newArr[i]), 0, newArr[i]);
  }

  return result;
};
