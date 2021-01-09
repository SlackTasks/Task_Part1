///// 1

const max = arg => {
    let count = 0
    for (let i = 0; i < arg.length; i++) {
        for (let j = 0; j < arg.length; j++) {
            if (arg[i] < arg[j]) {
                [arg[i], arg[j]] = [arg[j], arg[i]]
            }
        }
    }
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === arg[arg.length - 1]) {
            count++
        }
    }
    return count
}

console.log(max([1, 2, 8, 8, 8, 8, 8, 3, 4, 4]))

////// 2

///Hetaqrqir greladzeva ))
const min = arg => {
    for (let i = 0; i < arg.length; i++) {
        for (let j = 0; j < arg.length; j++) {
            if (arg[i] < arg[j]) {
                [arg[i], arg[j]] = [arg[j], arg[i]]
            }
        }
    }
    return arg
}

console.log(min([1, 5, -8, 2, 3]))

////// 3 - a

////Sxala ashxatum, petqa hashvi qank@
const fn = (arr, c) => {
    let acc = 0
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        new_arr.push((arr[i] + '').split(''))
    }
    for (let i = 0; i < new_arr.length; i++) {
        for (let j = 0; j < new_arr[i].length; j++) {
            acc += Number(new_arr[i][j])
        }
        if (c === acc) {
            console.log(new_arr[i].join(''))
        }
        acc = 0
    }

    return acc;
}
console.log(fn([123, 563, 124, 114], 6))


/////// 3 - b
const simple = (arr) => {
    let newArr = []
    nextPrime:
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= 2) {
            for (let j = 2; j < i; j++) {
                if (arr[i] % j === 0) continue nextPrime;
            }
            newArr.push(arr[i])
        }
    }
    let acc = newArr[0]
    for (let i = 1; i < newArr.length; i++) {
        acc *= newArr[i]
    }
    //return acc
}

console.log(simple([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
//2,3,5,7,11


////// 3 - g

//count@ ura??
//chi tpum, indz petqa vor tpi menak count@, urish voch mi avelord ban
function reply(arg) {
    const unique = []
    let count = 0
    for (let i = 0; i < arg.length; i++) {
        if (!unique.includes(arg[i])) {
            unique.push(arg[i])
        }
    }
    for (let i = 0; i < unique.length; i++) {
        for (let j = 0; j < arg.length; j++) {
            if (unique[i] === arg[j]) {
                count++
            }
        }
        console.log(`${unique[i]}-${count}`)
        count = 0
    }
}

console.log(reply([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4]))






