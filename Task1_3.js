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