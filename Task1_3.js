function quotientByDiv10(num) {

    var res = 0;

    if (num % 10 == 0) {

        res = num / 10;

    } else {

        while (num - 10 > 0) {
            num -= 10;
            res++;
        }
    }

    return res;

}


function sumOfDigits(num) {

    var sum = 0;

    while (num) {

        sum += num % 10;

        num = quotientByDiv10(num);

    }


    return sum;

}



function numOfElementsWithSumOfDigits(arr, num) {
    var qty = 0;
    for (var i = 0; i < arr.length; i++) {
        if (sumOfDigits(arr[i]) === num) {
            qty++;
        }
    }

    return qty;
}


function isPrime(num) {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }        
    }

    return true;
}


function productOfPrimeElements(arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) { 
            prod *= arr[i];
        }
        
    }

    return prod;
}


function sortDesc(arg) {

    for (var i = 0; i < arg.length - 1; i++) {

        for (var j = i + 1; j < arg.length; j++) {

            if (arg[i] < arg[j]) {
                var tmp = arg[i];
                arg[i] = arg[j];
                arg[j] = tmp;
            }

        }

    }
    return arg;
}



function printNumberOfRepeatingElements(arr) {

    let sortedArr = sortDesc(arr);
    let count = 1;

    let i = 0; 
    let j = 1;
 
    while (i < sortedArr.length-1) {
        j = i + 1;
        elem = sortedArr[i];

        while (sortedArr[j] == sortedArr[i]) {
            count++;
            j++;
        }

        if (count > 1) {
            console.log(sortedArr[i] + " is repeated " + count + " times. ");           
        }

        count = 1;
        i = j;
    }

}