let arr = [5, 15, 25, 35, 2, 17]
for(let i = 0; i < arr.length; i++){
    for(let j =i + 1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp
        }
    }
    console.log(arr[i])
}