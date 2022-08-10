exports.max = (numbers) => {
  return Math.max(...numbers);
};

exports.min = (numbers) => {
  return Math.min(...numbers);
};

exports.avg = (numbers) => {
  return numbers.reduce((acc, cur, index, { length }) => acc + cur / length, 0);
};

exports.median = (numbers) => {
  const { length } = numbers;
  const mid = Math.floor(length / 2);

  return length % 2 === 0
    ? (numbers[mid] + numbers[mid + 1]) / 2
    : numbers[mid];
};

exports.mode = (numbers) => {
  const counts = new Map();

  numbers.forEach((n) => {
    const count = counts.get(n) || 0;
    counts.set(n, count + 1);
  });

  const maxCount = Math.max(...counts.values());
  const result = [...counts.keys()].filter(
    (num) => counts.get(num) === maxCount
  );

  if (result.length === numbers.length) {
    return null;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return result;
  }
};
