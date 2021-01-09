/* 2. Տրված են x,y թվերը: Արտածել YES, եթե (x,y) կոորդի-
նատներով կետն ընկած է կոորդինատային հարթության
ա) երկրորդ քառորդում,
բ) չորրորդ քառորդում, 
գ) երկրորդ կամ երրորդ քառորդում, 
դ) առաջին կամ երրորդ քառորդում:  
Հակառակ դեպքում արտածել NO: */


///Nuynnel stex
function ifTrue(x, y) {
  if (x < 0 && y > 0) return "YES";
  else if (x > 0 && y < 0) return "YES";
  else if (x < 0) return "YES";
  else if ((x > 0 && y > 0) || (x < 0 && y < 0)) return "YES";
  else return "NO";
}
console.log(ifTrue(-5, 10));
