;(function(){
    let arr = [1, 2, 7, 12, 15, 25, 3, 4, 2, 6];

    /****************
     * khndir 1
     ***************/
    let c = 25;
    let len = arr.length;

    function getCounter(arr, len, c, equal = [], counter = 0, count = 0) {
        let eLen = equal.length;
        
        for(let i = 0; i < len; i++) {
            if(eLen > 0) {
                if(!equal.includes(arr[i])) {
                    if(count + arr[i] <= c) {
                        count += arr[i];
                        counter++;
                        equal.push(arr[i]);
                    }
                    if(count === c && count !== 0) {
                        return counter;
                    }
                }
            }else {
                if(count + arr[i] <= c) {
                    count += arr[i];
                    counter++;
                    equal.push(arr[i]);
                }

                if(count === c && count !== 0) {
                    return counter;
                }
            }
        }

        if(count !== 0 && count < len) {
            return getCounter(arr, len, c, equal, counter, count);
        }

        return "nman tver chka";
    }

    console.log(getCounter(arr, len, c));


    /****************
     * khndir 2
     ***************/
    function parzTiv(numbr) {
        let armat = Math.floor(Math.sqrt(numbr));
        for(let i = 2; i <= armat; i++) {
            if(numbr % i === 0) {
                return false;
            }
        }
        return true;
    }
    function artadryal(arr) {
        let counter = 1;
        let len = arr.length;
        for(let i = 0; i < len; i++) {
            if(parzTiv(arr[i])) {
                counter *= arr[i];
            }
        }
        return counter > 1 ? counter : "parz tiv chka";
    }
    console.log(artadryal(arr));

    /****************
     * khndir 3
     ***************/
    function getCountItemInOneArray(arr, num) {
        let counter = 0;
        let index = 0;
        let count = 0;

        while(index < arr.length) {
            if(num === arr[index]) {
                count ++;
                if(count > 1) {
                    counter ++;
                }
                arr.splice(index, 1);
                index--;
            }
            index++;
        }
        return {
            counter: counter === 0 ? 0 : ++counter,
            arr
        };
    }

    function counterEqualisItemsInArray(arr) {
        let nArr = [...arr];
        let counter = 0;
        let len = arr.length;

        for(let i = 0; i < len; i++) {
            let obj = getCountItemInOneArray(nArr, arr[i]);
            nArr = obj.arr;
            counter += obj.counter;
        }
        return counter;
    }
    console.log(counterEqualisItemsInArray(arr));
})();