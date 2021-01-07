/* Դասավորել տրված իրական թվերի հաջորդականության անդամները նվազման կարգով: */

function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
let arr = [14, 15, 17, 2, 56, 85, 100, 6, 10];
console.log(sortDescending(arr));
