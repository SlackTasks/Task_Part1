/* 3. Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության
	ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին,
	բ) պարզ թվերի արտադրյալը
	գ) կրկնվող տարրերի քանակը */

function sum(arr, c) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    while (num > 0) {
      sum += num % 10;
      num = (num - (num % 10)) / 10;
    }
    if (sum === c) {
      count++;
    }
    sum = 0;
  }
  return sum + count;
}
let arr = [145, 152, 172, 253];
console.log(sum(arr, 10));
