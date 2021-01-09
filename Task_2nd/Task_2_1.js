/* 1. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե դրան-
ցից
ա) գոնե մեկը զրո է,
բ) ճիշտ մեկը հինգ է, 
գ) ոչ մեկը մյուսներին հավասար չէ,
դ) ճիշտ երկուսն են հավասար, 
ե) բոլոր երեքն իրար հավասար են, 
զ) գոնե մեկը բացասական է, 
Հակառակ դեպքում արտածել NO: */


////Stex ete YES return ani, es chgitem incha stugum inqy@, orinak console.log karas
//// anes nayev payman@, vor aveli haskanali lini

function ifTrue(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return "YES";
  else if (a === 5) return "YES";
  else if (a !== b && a !== c && b !== c) return "YES";
  else if (a === b || a === c || b === c) return "YES";
  else if (a === b && a === c && b === c) return "YES";
  else if (a < 0 || b < 0 || c < 0) return "YES";
  else return "NO";
}
console.log(ifTrue(-5, 9, 6));
