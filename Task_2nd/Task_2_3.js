/* 3. Տրված են երեք ամբողջ թվեր: Արտածել
ա)( դրանցից փոքրագույնի արժեքը,
բ) դրանցից մեծագույնի արժեքը
գ) մեծությամբ երկրորդ թվի արժեքը */


/// Stex lava funkciayi anun@ hushuma ira imast@

let a=2,b=4,c=-7;
function findMin(a, b, c) {
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else return c;
}
console.log(findMin(a,b,c));

function findMax(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}
console.log(findMax(a,b,c));

function findAvg(a, b, c) {
  if ((a > b && a < c) || (a > c && a < b)) return a;
  else if ((b > a && b < c) || (b > c && b < a)) return b;
  else return c;
}
console.log(findAvg(a,b,c));
