/*
1. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե դրան-
ցից
ա) գոնե մեկը զրո է,
բ) ճիշտ մեկը հինգ է, 
գ) ոչ մեկը մյուսներին հավասար չէ,
դ) ճիշտ երկուսն են հավասար, 
ե) բոլոր երեքն իրար հավասար են, 
զ) գոնե մեկը բացասական է, 
Հակառակ դեպքում արտածել NO:
*/

function isAnyZero(a, b, c) {
    if (a === 0 || b === 0 || c === 0) return "YES";
    return "NO";
}


function isOnlyOneFive(a, b, c) {
    if ((a === 5 && a !== b && a !== c) || (b === 5 && a !== b && c !== b) || (c === 5 && a !== c && b !== c)) {
        return "YES";
    }
    return "NO";
}


function isDifferent(a, b, c) {
    if (a==b || a==c || b==c) {
        return "NO";
    }
    return "YES";
}


function isOnlyTwoEqual(a, b, c) {
    if ((a===b && a!==c) || (a===c && b!==c) || (b===c && a!==c)) {
        return "YES";
    }

    return "NO";
}


function areAllEqual(a, b, c) {
    if (a===b && a===c) return "YES";
    return "NO";
}


function isAnyNegative(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return "YES";
    }
    return "NO";
}


