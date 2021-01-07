function getMaxElemCount(arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      count = 0;
    }

    if (max == arr[i]) count++;
  }

  return `Max=${max},count=${count}`;
}

console.log(getMaxElemCount([1, 2, -6, 3, 3, -5, -6, -5]));