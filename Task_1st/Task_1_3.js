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

/* 	բ) պարզ թվերի արտադրյալը */

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function multPrimeNumbers(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (isPrime(num)) {
      result *= num;
    }
  }
  return result;
}

let arr = [5, 11, 6, 4];
console.log(multPrimeNumbers(arr));

/* գ) կրկնվող տարրերի քանակը */

function countRepeatitions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
  }
  return count;
}

let arr = [5, 11, 6, 4, 5, 7, 11, 15, 15];
console.log(countRepeatitions(arr));
