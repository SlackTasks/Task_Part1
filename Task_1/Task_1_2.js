
function swap(a, b) { return [b, a] }

function sort(arr, asc = true) {
    let newArr = arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (asc) {
                if (newArr[j] < newArr[j + 1]) {
                    let swaped = swap(newArr[j], newArr[j + 1]);
                    newArr[j + 1] = parseInt(swaped[1]);
                    newArr[j] = parseInt(swaped[0]);
                }
            } else {
                if (newArr[j] > newArr[j + 1]) {
                    let swaped = swap(newArr[j], newArr[j + 1]);
                    newArr[j + 1] = parseInt(swaped[1]);
                    newArr[j] = parseInt(swaped[0]);
                }
            }

        }
    }

    return newArr
}

console.log(sort([1, 2, 6, -5, 0, -6]));
console.log(sort([1, 2, 6, -5, 0, -6], false));