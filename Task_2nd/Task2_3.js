/*
3. Տրված են երեք ամբողջ թվեր: Արտածել
ա) դրանցից փոքրագույնի արժեքը,
բ) դրանցից մեծագույնի արժեքը
գ) մեծությամբ երկրորդ թվի արժեքը
*/


function getMinOfThree(a, b, c) {
    let minAB = a < b ? a : b;
    return minAB < c ? minAB : c;
}


function getMaxOfThree(a, b, c) {
    let maxAB = a > b ? a : b;
    return maxAB > c ? maxAB : c;
}


function getSecondMax(a, b, c) {
    if (a > b) {
        if (b > c) return b;
        return a < c ? a : c;
    } else {
        if (b < c) {
            return b;
        }
        return a > c ? a : c;
    }

}