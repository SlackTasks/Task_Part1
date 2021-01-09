const fn_3 = (a, b, c) => {
    /// min
    if ((a < b || a === b) && (a < c || a === c)) {
        return a
    }
    else if ((b < a || b === a) && (b < c || b === c)) {
        return b
    }
    else if ((c < b || c === b) && (c < a || c === a)){
        return c
    }
    /// max
    if ((a > b || a === b) && (a > c || a === c)) {
        return a
    }
    else if ((b > a || b === a) && (b > c || b === c)) {
        return b
    }
    else if ((c > b || c === b) && (c > a || c === a)){
        return c
    }
    //// middle
    if ((a > b && a < c) || (a < b && a > c)) {
        return a
    }
    else if ((a < b && b < c) || (a > b && b > c)) {
        return b
    }
    else if ((a > c && b < c) || (a < b && b > c)) {
        return c
    }
}

console.log(fn_3(1, 3, 2))