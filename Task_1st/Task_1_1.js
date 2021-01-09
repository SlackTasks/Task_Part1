///// 1
const max = arg => arg.reduce((a, b) => {
  const m = Math.max(...arg)
  if (m === b) a++
  return a
}, 0)

//Max funkcian du petqa gres
console.log(max([1, 2, 8, 8, 8, 8, 8, 3, 4, 4]))

//// 2
const min = arg => arg.sort((a, b) => a - b)
////Sort funkcian du petqa gres

console.log(min([1, 5, 8, 2, 3]))

//// 3 - a PAHANJ@ CHASKACA :(

// /// 3 - b
const fn = (arr) => {
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
  return newArr
}

const val = fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

const multi = val => {
  let acc = val[0]
  for (let i = 1; i < val.length; i++) {
    acc *= val[i]
  }
  return acc
}

console.log("--multi", multi(val))

///Kod@ erkara, ashxati karc lini, bayc effective

//// 3 - g

function reply(arg) {
  const unique = [...new Set(arg)]
  ///Set kam nmanatib baner chpetqa kirarvi
  //Ete tenc ban kirarva, kod@ hamarvuma sxal

  let count = 0
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

console.log("Unique", reply([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4]))






