/* 3. Տրված են երեք ամբողջ թվեր: Արտածել
ա)( դրանցից փոքրագույնի արժեքը,
բ) դրանցից մեծագույնի արժեքը
գ) մեծությամբ երկրորդ թվի արժեքը */

function findMin(a, b, c) {
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else return c;
}
console.log(findMin(5, 12, 6));

function findMax(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}
console.log(findMax(5, 12, 6));

function findAvg(a, b, c) {
  if ((a > b && a < c) || (a > c && a < b)) return a;
  else if ((b > a && b < c) || (b > c && b < a)) return b;
  else return c;
}
console.log(findAvg(5, 12, 6));
