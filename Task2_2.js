/*
2. Տրված են x,y թվերը: Արտածել YES, եթե (x,y) կոորդի-
նատներով կետն ընկած է կոորդինատային հարթության
ա) երկրորդ քառորդում,
բ) չորրորդ քառորդում, 
գ) երկրորդ կամ երրորդ քառորդում, 
դ) առաջին կամ երրորդ քառորդում: 
Հակառակ դեպքում արտածել NO:
*/

function isInQuadrantTwo(x, y) {
    if (x < 0 && y > 0) {
        return "YES";
    }
    return "NO";
}


function isInQuadrantFour(x, y) {
    if (x > 0 && y < 0) {
        return "YES";
    }
    return "NO";
}


function isInQuadrantTwoOrThree(x, y) {
    if ((x < 0 && y > 0) || (x < 0 && y < 0)) {
        return "YES";
    }
    return "NO";
}


function isInQuadrantOneOrThree(x, y) {
    if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
        return "YES";
    }
    return "NO";
}