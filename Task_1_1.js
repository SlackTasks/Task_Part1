/* 1. Տրված ամբողջ թվերի հաջորդականության համար արտածել, թե քանի անգամ է կրկնվում մեծագույն տարրը: */

function maxCount(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] >= arr[j] && arr[i] > max) {
        max = arr[i];
      } else if (arr[j] < arr[i] && arr[j] > max) {
        max = arr[j];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      count++;
    }
  }
  return count;
}

let arr = [4, 25, 8, 7, 35, 35, 35, 21, 11, 5, 2, 21, 25];

console.log(maxCount(arr));
