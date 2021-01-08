function getSumOfDigits(num) {
    let sum = 0;

    while (num) {
        sum += parseInt(num % 10);
        num = Math.floor(num / 10);

    }
    return sum;
}

function isPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) isPrime = false;
    }

    return isPrime;
}
//1
function equal(arr, c) {
    let count = 0;

    arr.forEach(num => {
        if (getSumOfDigits(num) === c) count++;
    })

    return "Count=" + count;
}

console.log("-----TASK 3_1-----")
console.log(equal([123, 345, 165, 678], 12));
console.log(equal([1234, 345, 145, 136], 10));


//2

function multOfPrimeNumbers(arr) {
    let mult = 1;

    arr.forEach(num => {
        if (isPrime(num)) mult *= num;
    })

    return "Mult=" + mult;
}

console.log("-----TASK 3_2-----")
console.log(multOfPrimeNumbers([4, 3, 6, 5, 9]));
console.log(multOfPrimeNumbers([37, 47, 1, 4, 3]));

//3
console.log("-----TASK 3_3-----")
console.log("Task_1_2-i nman petq e lini, parzapes tpel miayn count-@.");
