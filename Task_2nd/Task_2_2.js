const fn_2 = (x, y) => {
    if (Math.sign(x) === 1 && Math.sign(y) === -1) {
        return 'YES'
    }
    if (Math.sign(x) === -1 && Math.sign(y) === 1) {
        return 'YES'
    }
    if ((Math.sign(x) === 1 && Math.sign(y) === -1) || (Math.sign(x) === -1 && Math.sign(y) === -1)) {
        return 'YES'
    }
    if ((Math.sign(x) === 1 && Math.sign(y) === 1) || (Math.sign(x) === -1 && Math.sign(y) === -1)) {
        return 'YES'
    }
    return 'NO'
}


console.log(fn_2(1, -2))